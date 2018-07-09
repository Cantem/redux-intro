import React from "react";
import VotingButtons from "./VotingButtons";
import CountrySelector from "./CountrySelector";
import CountriesVisited from "./CountriesVisited";

class App extends React.Component {
  constructor(props) {
    super(props);

    const reduxState = this.props.store.getState();

    this.state = {
      selectedButton: reduxState.selectButton.selectedButton,
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen,
      stateAddedCountry: reduxState.countriesVisited.countries,
      stateDeletedCountry: reduxState.countriesVisited.countries
    };
  }

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.updateFromStore();
    });
  }

  updateFromStore() {
    const { store } = this.props;

    const reduxState = store.getState();

    this.setState({
      selectedButton: reduxState.selectButton.selectedButton,
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen,
      stateAddedCountry: reduxState.countriesVisited.countries,
      stateDeletedCountry: reduxState.countriesVisited.countries
    });
  }

  render() {
    return (
      <div>
        <VotingButtons
          selectedButton={this.state.selectedButton}
          dispatch={this.props.store.dispatch}
        />
        <CountrySelector
          selectedCountry={this.state.selectedCountry}
          countryListOpen={this.state.countryListOpen}
          dispatch={this.props.store.dispatch}
        />

        <CountriesVisited
          stateAddedCountry={this.state.stateAddedCountry}
          dispatch={this.props.store.dispatch}
        />
      </div>
    );
  }
}

export default App;
