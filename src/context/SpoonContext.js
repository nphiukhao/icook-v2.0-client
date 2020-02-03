import React, { Component } from "react";

export const spoonsRecipe = {
  result: []
};

const SpoonContext = React.createContext({
  result: [],
  setResults: () => {}
});

export default SpoonContext;

export class SpoonProvider extends Component {
  state = {
    result: []
  };

  setResults = results => {
    console.log('in spoon context', results)
    this.setState({ result: results });
    console.log('state',this.state.result)
  };

  render() {
    const value = {
      result: this.state.result,
      setResults: this.setResults
    };
    return (
      <SpoonContext.Provider value={value}>
        {this.props.children}
      </SpoonContext.Provider>
    );
  }
}
