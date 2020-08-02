import React, { Component } from "react";
import BrowseService from "../services/BrowseService";

export const spoonsRecipe = {
  query: "",
  offset: 0,
  // cuisine: null,
  // diet: null,
  result: [],
  recipeInfo: [],
  ingredients: [],
  instructions: [],
};

const SpoonContext = React.createContext({
  query: "",
  offset: 0,
  result: [],
  recipeInfo: [],
  ingredients: [],
  instructions: [],
  setResults: () => {},
  searchQuery: () => {},
  getResult: () => {},
  changeOffset: () => {},
  clearData: () => {},
  updateIngredients: () => {},
  updateInstructions: () => {},
  buildIngred: () => {},
  setRecipeInfo: () => {},
});

export default SpoonContext;

export class SpoonProvider extends Component {
  state = {
    query: "",
    // cuisine: null,
    // diet: null,
    offset: 0,
    result: [],
    recipeInfo: {
      title: "",
      readyInMinutes: "",
      servings: "",
      vegetarian: null,
      vegan: null,
      glutenFree: null,
      dairyFree: null,
    },
    ingredients: [],
    instructions: [],
  };

  updateSearch = (e, searchParam) => {
    //query
    this.setState({ [searchParam]: e.target.value });
  };

  searchQuery = (e) => {
    e.preventDefault();
    this.getResult();
  };

  getResult = () => {

    const getResultAPI = async () => {
      let result = await BrowseService.getResult(
        this.state.query,
        this.state.offset
      );
      this.setResults(result.results);
    };

    getResultAPI();
  };

  changeOffset = (e, value) => {
    e.preventDefault();
    if (value === "next") {
      this.setState((state) => {
        return { offset: state.offset + 12 };
      }, this.getResult);
    } else if (value === "prev" && this.state.offset >= 12) {
      this.setState((state) => {
        return { offset: state.offset - 12 };
      }, this.getResult);
    }
  };

  setResults = (results) => {
    this.setState({ result: results });
    console.log("setting results");
  };

  clearData = () => {
    this.setState({
      result: [],
      ingredients: [],
    });
  };

  setRecipeInfo = (result) => {
    console.log("RESULT ->", result);
    let {
      title,
      readyInMinutes,
      servings,
      vegan,
      vegetarian,
      glutenFree,
      dairyFree,
    } = result;
    let recipeInfo = {
      title,
      readyInMinutes,
      servings,
      vegan,
      vegetarian,
      glutenFree,
      dairyFree,
    };
    this.setState({ recipeInfo });
    console.log(this.state.recipeInfo);
  };
  updateIngredients = (result) => {
    this.setState({
      ingredients: result,
    });
  };

  buildIngred = (ingredResult) => {
    let ingredientsArr = [];
    ingredResult.forEach((ingred) => {
      ingredientsArr.push({
        name: ingred.name,
        amount: ingred.measures.us.amount,
        unit: ingred.measures.us.unitShort,
      });
    });
    this.updateIngredients(ingredientsArr);
  };

  updateInstructions = (instructions) => {
    // console.log('updating instructions', instructions);
    this.setState({
      instructions: instructions,
    });
    // console.log('this is instructions in state',this.state.instructions)
  };

  render() {
    const value = {
      query: this.state.query,
      offset: this.state.offset,
      result: this.state.result,
      recipeInfo: this.state.recipeInfo,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
      updateSearch: this.updateSearch,
      searchQuery: this.searchQuery,
      getResult: this.getResult,
      changeOffset: this.changeOffset,
      setResults: this.setResults,
      clearData: this.clearData,
      updateIngredients: this.updateIngredients,
      updateInstructions: this.updateInstructions,
      buildIngred: this.buildIngred,
      setRecipeInfo: this.setRecipeInfo,
    };
    return (
      <SpoonContext.Provider value={value}>
        {this.props.children}
      </SpoonContext.Provider>
    );
  }
}
