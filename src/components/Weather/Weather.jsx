import React from "react";

export const Weather = ({ props = "" }) => {
  let values = {};
  Object.keys(props).map((key) => (values = props[key]));
  let canRender = Object.keys(values).length !== 0;

  return (
    <div className="flex items-center  flex-col">
      {canRender && (
        <div className="flex">
          Hora:
          <h1 className="pl-2"> {values.currentConditions.datetime}</h1>
        </div>
      )}
      {canRender && (
        <div className="flex">
          It's:
          <h1 className="pl-2">
            {values.currentConditions.temp}°C in {Object.keys(props)[0]}
          </h1>
        </div>
      )}
    </div>
  );
};
