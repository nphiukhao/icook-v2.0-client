import React, { Component } from "react";
import BrowseService from "../services/BrowseService"

export const spoonsRecipe = {
  query: "",
  // cuisine: null,
  // diet: null,
  result: [],
  recipeInfo: [],
  ingredients: [],
  instructions: []
};

const SpoonContext = React.createContext({
  result: [],
  recipeInfo: [],
  ingredients: [],
  instructions: [],
  setResults: () => {},
  clearData: () => {},
  updateIngredients: () => {},
  updateInstructions: () => {},
  buildIngred: () => {},
});

export default SpoonContext;

export class SpoonProvider extends Component {
  state = {
    query: "",
    // cuisine: null,
    // diet: null,
    result: [],
    recipeInfo: {
      title: "",
      summary: "",
      minutes: ""
    },
    ingredients: [],
    instructions: []
  };

  updateSearch = (e, searchParam) => {
    this.setState({ [searchParam]: e.target.value });
  };

  searchQuery = e => {
    e.preventDefault();
    console.log("calling query call", this.state);


    // fetch(
    //   `https://api.spoonacular.com/recipes/search?query=${this.state.query}&number=12&apiKey=90983f8a705146c39a2acfcb0c8b7f28`
    // )
    //   .then(res =>
    //     !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    //   )
    BrowseService.getResult(this.state.query).then(result => this.setResults(result.results));
    console.log(this.state.result)
  };

  setResults = results => {
    this.setState({ result: results });
  };

  clearData = () => {
    this.setState({
      result: [],
      ingredients: []
    })
  }
  updateIngredients = result => {
    this.setState({
      ingredients: result
    });
  };

  buildIngred = ingredResult => {
    let ingredientsArr = [];
    ingredResult.forEach(ingred => {
      ingredientsArr.push({
        name: ingred.name,
        amount: ingred.measures.us.amount,
        unit: ingred.measures.us.unitShort
      });
    });
    this.updateIngredients(ingredientsArr);
  };

  updateInstructions = instructions => {
    console.log('updating instructions', instructions);
    this.setState({
      instructions:instructions
    })
    console.log('this is instructions in state',this.state.instructions)
  }


  render() {
    const value = {
      query: this.state.query,
      result: this.state.result,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
      updateSearch: this.updateSearch,
      searchQuery: this.searchQuery,
      setResults: this.setResults,
      clearData: this.clearData,
      updateIngredients: this.updateIngredients,
      updateInstructions: this.updateInstructions,
      buildIngred: this.buildIngred
    };
    return (
      <SpoonContext.Provider value={value}>
        {this.props.children}
      </SpoonContext.Provider>
    );
  }
}
