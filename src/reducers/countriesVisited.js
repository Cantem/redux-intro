function countriesVisited(
  state = {
    countries: []
  },
  action
) {
  switch (action.type) {
    case "ADD_COUNTRY":
      const countries = [...state.countries, action.country];
      const stateAddedCountry = Object.assign({}, state, { countries });
      return stateAddedCountry;

    case "DELETE_COUNTRY":
      const countriesLeft = state.countries.filter((_, index) => {
        return index !== action.countryIndex;
      });
      console.log(countriesLeft);
      const stateDeletedCountry = Object.assign({}, state, {
        countries: countriesLeft
      });
      return stateDeletedCountry;

    default:
      return state;
  }
}

export default countriesVisited;
