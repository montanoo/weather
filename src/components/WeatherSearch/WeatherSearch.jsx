import React, { useEffect, useState } from "react";
import { SearchBar } from "../Search/SearchBar";
import { Weather } from "../Weather/Weather";
import OpenWeather from "../../api/OpenWeather";

export const WeatherSearch = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const onSearchBarSubmit = (searchTerm) => setTerm(searchTerm);

  useEffect(() => {
    async function getWeather() {
      const response = await OpenWeather.get("", {
        params: { location: term },
      });
      setResult(response.data.locations);
    }
    if (term) getWeather();
  }, [term]);

  return (
    // ⚠️ sending a function as props to the SearchBar.
    <div>
      <SearchBar onSubmit={onSearchBarSubmit} />
      <Weather props={result} />
    </div>
  );
};
