import { useState, useEffect } from "react";
import FilterInput from "./components/FilterInput";
import countriesService from "./services/countries";
import Content from "./components/Content";

function App() {
  const [apiCountries, setApiCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filterValue, setFilterValue] = useState(false);

  useEffect(() => {
    countriesService
      .getAll()
      .then((initialCountries) => {
        setApiCountries(initialCountries);
        setFilteredCountries(initialCountries);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filterCountries = (searchTerm) => {
    if (searchTerm.length === 0) {
      setFilterValue(false);
    } else {
      setFilterValue(true);
    }
    const filteredItems = apiCountries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCountries(filteredItems);
  };

  return (
    <>
      <h1>Countries information</h1>
      <FilterInput onChangeCallback={filterCountries} />
      {loading && <p>Loading...</p>}
      {error && <p>There was an error loading the countries</p>}
      {!loading && !error && (
        <Content
          filterValue={filterValue}
          filteredCountries={filteredCountries}
          setFilteredCountries={setFilteredCountries}
        />
      )}
    </>
  );
}

export default App;
