import React, { useEffect, useState } from "react";
import { SearchBar } from "../Search/SearchBar";
import { Weather } from "../Weather/Weather";
import OpenWeather from "../../api/OpenWeather";
import Unsplash from "../../api/Unsplash";

export const WeatherSearch = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [searchPics, setSearchPics] = useState("Cloudy");
  const [pics, setPics] = useState([]);
  const onSearchBarSubmit = (searchTerm) => setTerm(searchTerm);

  useEffect(() => {
    async function getWeather() {
      const response = await OpenWeather.get("", {
        params: { location: term },
      });
      setResult(response.data.locations);
      setSearchPics(response.data.locations[term].values[0].conditions)
    }
    if (term) getWeather();
  }, [term]);

  useEffect(() => {
    async function getPics() {
      const picResponse = await Unsplash.get("/search/photos", {
        params: { query: searchPics, color: "black", orientation: "landscape" },
      });
      setPics(picResponse.data.results);
    }
    if (searchPics) getPics();
  }, [searchPics]);

  let randomValue = Math.floor(Math.random() * 10)
  return (
    // ⚠️ sending a function as props to the SearchBar.
    <div
      className="h-screen bg-cover bg-center transition-colors bg-black"
      style={{ backgroundImage: pics.length === 0 ? "none" :`url(https://source.unsplash.com/${pics[randomValue].id}` }}
    >
      <SearchBar onSubmit={onSearchBarSubmit} />
      <Weather props={result} />
      <div>
        {pics.length !== 0 && (
          <div className="text-white flex justify-end  text-lg">
            <div className="bg-slate-500 rounded-xl px-4 mr-4 py-2 bg-opacity-40">
              Pic by: {pics[randomValue].user.first_name + " " + pics[randomValue].user.last_name}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
