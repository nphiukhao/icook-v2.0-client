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
  updateInstructions: () => {},
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
    console.log("setting the state of ingreds", result);
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
      result: this.state.result,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
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
