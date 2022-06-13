import React, { useState } from "react";

export const SearchBar = (props) => { // 🐧 props: coming from WeatherSearch..
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault(); // 🔆 stops the page from refreshing after submiting the form.
    props.onSubmit(term); // props.onSubmit -> the function that comes from WeatherSearch.jsx.
  };

  return (
    /* 📩 on the onSubmit event from the form, the function onFormSubmit is called, 
      function which also calls the onSubmit function that came as props. */
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="font-poppins flex align-center flex-col items-center">
          <label className="block center p-2 font-bold">Weather search</label>
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => setTerm(e.target.value)} // sets the Term to the current value everytime it changes.
            className="p-3 rounded-xl border-2 text-center text-slate-500"
          />
        </div>
      </form>
    </div>
  );
};
