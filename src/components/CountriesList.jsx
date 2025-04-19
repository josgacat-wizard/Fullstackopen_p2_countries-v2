const CountriesList = ({ countries, setFilteredCountries }) => {
  return (
    <>
      {countries.length === 0 ? (
        <p>No countries found</p>
      ) : (
        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}{" "}
              <button onClick={() => setFilteredCountries([country])}>
                Show
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CountriesList;
