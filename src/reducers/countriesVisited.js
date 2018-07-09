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
      return;

    default:
      return state;
  }
}

export default countriesVisited;
