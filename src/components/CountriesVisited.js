import React from "react";
import cx from "classnames";

function CountriesVisited({ stateAddedCountry, deleteCountry }) {
  return (
    <ul>
      {stateAddedCountry.map((country, index) => {
        return (
          <div key={index}>
            <li>{country}</li>
            <button onClick={deleteCountry}>Delete</button>
          </div>
        );
      })}
    </ul>
  );
}
export default CountriesVisited;
