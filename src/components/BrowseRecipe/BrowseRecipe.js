import React, { Component } from "react";
import SpoonContext from "../../context/SpoonContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./BrowseRecipe.css";

export default class BrowseRecipe extends Component {
  static contextType = SpoonContext;

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=90983f8a705146c39a2acfcb0c8b7f28`
    )
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((result) => {
        this.context.setRecipeInfo(result);
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
              <span>
                {ingred.amount} {ingred.unit}
              </span>{" "}
              {ingred.name}
            </li>
          );
        })}
      </ul>
    );
  };

  renderInstructions = () => {
    // console.log("rendering instructions");
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

  renderRecipeInfo = () => {
    const {
      readyInMinutes,
      servings,
      vegan,
      vegetarian,
      glutenFree,
      dairyFree,
    } = this.context.recipeInfo;
    return (
      <>
        <p>Ready In: {readyInMinutes}</p>
        <p>Servings: {servings}</p>
        <div className="diet">
          <p>
            {vegan ? (
              <FontAwesomeIcon
                className="icon"
                icon={faCheck}
                size="1x"
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                className="icon"
                icon={faTimes}
                size="1x"
              ></FontAwesomeIcon>
            )}
            Vegan
          </p>
          <p>
            {vegetarian ? (
              <FontAwesomeIcon
                className="icon"
                icon={faCheck}
                size="1x"
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                className="icon"
                icon={faTimes}
                size="1x"
              ></FontAwesomeIcon>
            )}
            Vegetarian
          </p>
          <p>
            {glutenFree ? (
              <FontAwesomeIcon
                className="icon"
                icon={faCheck}
                size="1x"
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                className="icon"
                icon={faTimes}
                size="1x"
              ></FontAwesomeIcon>
            )}
            Gluten Free
          </p>
          <p>
            {dairyFree ? (
              <FontAwesomeIcon
                className="icon"
                icon={faCheck}
                size="1x"
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                className="icon"
                icon={faTimes}
                size="1x"
              ></FontAwesomeIcon>
            )}
            Dairy Free
          </p>
        </div>
      </>
    );
  };

  render() {
    const { title } = this.context.recipeInfo;
    return (
      <div className="recipe-container">
        {this.context.recipeInfo ? <h2>{title}</h2> : null}

        <img
          className="card-img"
          src={`https://spoonacular.com/recipeImages/${this.props.match.params.id}-312x231.jpg`}
          alt={`recipe`}
        />
        <div className="recipeInfo">
          {this.context.recipeInfo ? this.renderRecipeInfo() : null}
        </div>
        <div className="ingredients">
          <h3>Ingredients:</h3>
          {this.context.ingredients ? this.renderIngredients() : null}
        </div>
        <div className="instructions">
          <h3>Steps:</h3>
          {this.context.instructions ? this.renderInstructions() : null}
        </div>
      </div>
    );
  }
}
