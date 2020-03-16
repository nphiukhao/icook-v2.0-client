import React, { Component } from "react";
import SpoonContext from "../../context/SpoonContext";
import "./BrowseRecipe.css";

export default class BrowseRecipe extends Component {
  static contextType = SpoonContext;

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=90983f8a705146c39a2acfcb0c8b7f28`
    )
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(result => {
        this.context.buildIngred(result.extendedIngredients);
        this.context.updateInstructions(result.analyzedInstructions[0].steps);
      });
  }
  renderIngredients = () => {
    return (
      <ul className="ingredients">
        {this.context.ingredients.map((ingred, index) => {
          return (
            <li key={index}>
              <span>{ingred.amount} {ingred.unit}</span> {ingred.name}
            </li>
          );
        })}
      </ul>
    );
  };

  renderInstructions = () => {
    console.log("rendering instructions");
    return (
      <ul className="instructions">
        {this.context.instructions.map((instruction, index) => {
          return (
            <li key={index}>
              <span>{instruction.number}.</span> {instruction.step}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <h2> Single Recipe Page</h2>
        <img
          className="card-img"
          src={`https://spoonacular.com/recipeImages/${this.props.match.params.id}-480x360.jpg`}
          alt={`recipe`}
        />
        <div className="ingredients">
          {this.context.ingredients ? this.renderIngredients() : null}
        </div>
        <div className="instructions">
          {this.context.instructions ? this.renderInstructions() : null}
        </div>
      </div>
    );
  }
}
