import React, { Component } from "react";
import Recipelist from "./recipe-list";
import RecipeContext from "../../context/RecipeContext";
import RecipeApiService from "../../services/RecipeServices";
import "./filter-all.css";

export default class FilterAll extends Component {
  static contextType = RecipeContext;

  renderRecipes = () => {
    return this.context.recipeArray.map(recipe => (
      <Recipelist
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        instructions={recipe.instructions}
        minutes={recipe.minutes}
        image={recipe.image}
      />
    ));
  };
  componentDidMount() {
    this.context.clearRecipeArray();

    RecipeApiService.getRecipe().then(result => {
      this.context.loadRecipeData(result);
    });
  }

  render() {
    return (
      <div className="filter-all-container">
        <h2>All of the recipes</h2>
        {this.renderRecipes()}
      </div>
    );
  }
}
