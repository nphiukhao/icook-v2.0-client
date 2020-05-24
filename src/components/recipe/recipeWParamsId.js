import config from "../../config";
import React, { Component } from "react";
import RecipeContext from "../../context/RecipeContext";
import RecipeApiService from "../../services/RecipeServices";

import "./recipe.css";

export default class Recipe extends Component {
  static contextType = RecipeContext;

  state = {
    edit: false,
    newMin: null,
  };
  handleEdit = (field, newData) => {
    let id = this.props.match.params.id;
    this.context.handleClientUpdate(field, newData);
    //RecipeApiService.updateMinutes(id, newMinutes);

    this.setState({
      edit: false,
    });
  };
  handleDelete = () => {
    fetch(`${config.API_ENDPOINT}/delete/${this.context.recipeId}`, {
      method: "DELETE",
    });
    this.props.history.push("/");
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    RecipeApiService.getRecipebyId(id)
      .then((result) => this.context.setIngred(result, id))
      .catch((err) => console.error(err));
  }

  render() {
    const { ingredients, instructions, title, minutes } = this.context;
    return (
      <div className="recipe-container">
        <h2>{title} </h2>
        <div>
          {this.state.edit ? (
            <p>
              <span>Ingredients:</span>
              <input className="update-input"  defaultValue={ingredients} ref="ingredients"/>
              <button className="update button" onClick={() => this.handleEdit(this.refs.ingredients, this.refs.ingredients.value)}>
              Update
              </button>
            </p>
          ) 
          
          : (
            <p>
              <span>Ingredients:</span> {ingredients}
            </p>
          )}

          <p>
            <span>Instructions:</span> {instructions}
          </p>
          {this.state.edit ? (
            <span>
              Total Cooking Time:
              <input
                className="update-input"
                defaultValue={minutes}
                ref="minutes"
              />
              <button
                className="update button"
                onClick={() => this.handleEdit(this.refs.minutes.value)}
              >
                Update
              </button>
            </span>
          ) : (
            <span>Total Cooking Time: {minutes}</span>
          )}
        </div>
        <div className="recipe-buttons">
          <button
            className="edit button"
            onClick={() => this.setState({ edit: true })}
          >
            Edit
          </button>
          <button className="remove button" onClick={() => this.handleDelete()}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}
