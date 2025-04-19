import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const params = {
      access_key: import.meta.env.VITE_REACT_APP_API_KEY,
      query: country.capital,
    };

    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${params.access_key}&query=${params.query}`
      )
      .then((response) => {
        const apiResponse = response.data;
        console.log(apiResponse);
        console.log(
          `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
        );
        setWeather([apiResponse]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (weather.length > 0) {
    const currentWeather = weather[0].current;
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
        <h3>Languages</h3>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
        <br />
        <img src={country.flags.svg} alt={country.flags.alt} width={200} />
        <h3>Weather in {country.capital}</h3>
        <p>temperature: {currentWeather.temperature}° Celcius</p>
        <img src={currentWeather.weather_icons[0]} alt="Weather icon"></img>
        <p>
          wind: {currentWeather.wind_speed} mph direction{" "}
          {currentWeather.wind_dir}
        </p>
      </div>
    );
  }

  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>
      <h3>Languages</h3>
      {Object.values(country.languages).map((language) => (
        <li key={language}>{language}</li>
      ))}
      <br />
      <img src={country.flags.svg} alt={country.flags.alt} width={200} />
    </>
  );
};

export default Country;
