import React from "react";
import cx from "classnames";

function CountriesVisited({ stateAddedCountry, dispatch }) {
  function handleDelete(index) {
    console.log(index);
    dispatch({
      type: "DELETE_COUNTRY",
      countryIndex: index
    });
  }

  return (
    <ul>
      {stateAddedCountry.map((country, index) => {
        return (
          <div key={index}>
            <li>{country}</li>
            <button onClick={event => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </ul>
  );
}
export default CountriesVisited;
