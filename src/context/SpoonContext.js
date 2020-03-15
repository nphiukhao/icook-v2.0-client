import React, { Component } from "react";

export const spoonsRecipe = {
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
  buildIngred: () => {},
});

export default SpoonContext;

export class SpoonProvider extends Component {
  state = {
    result: [],
    recipeInfo: {
      title: "",
      summary: "",
      minutes: ""
    },
    ingredients: [],
    instructions: []
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
    // console.log("setting the state of ingreds");
    this.setState({
      ingredients: result
    });
  };

  buildIngred = ingredResult => {
    console.log("inside bildIngred");
    let ingredientsArr = [];
    ingredResult.forEach(ingred => {
      ingredientsArr.push({
        // id: ingred.id,
        name: ingred.name,
        amount: ingred.measures.us.amount,
        unit: ingred.measures.us.unitShort
      });
    });
    this.updateIngredients(ingredientsArr);
  };


  render() {
    const value = {
      result: this.state.result,
      ingredients: this.state.ingredients,
      setResults: this.setResults,
      clearData: this.clearData,
      updateIngredients: this.updateIngredients,
      buildIngred: this.buildIngred
    };
    return (
      <SpoonContext.Provider value={value}>
        {this.props.children}
      </SpoonContext.Provider>
    );
  }
}
