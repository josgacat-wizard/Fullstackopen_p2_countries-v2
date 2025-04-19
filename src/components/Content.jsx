import CountriesList from "./CountriesList";
import Country from "./country";

const Content = ({ filterValue, filteredCountries, setFilteredCountries }) => {
  let content;

  if (filterValue === false) {
    content = "";
  } else if (filteredCountries.length > 10) {
    content = <p>Too many matches, specify another filter</p>;
  } else if (filteredCountries.length === 10 || filteredCountries.length > 1) {
    content = (
      <CountriesList
        countries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
      />
    );
  } else if (filteredCountries.length === 1) {
    content = <Country country={filteredCountries[0]} />;
  }

  return <>{content}</>;
};

export default Content;
