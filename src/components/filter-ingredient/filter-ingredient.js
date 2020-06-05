import React, { Component } from "react";
import RecipeContext from "../../context/RecipeContext";
import RecipeApiService from "../../services/RecipeServices";
import "./filter-ingred.css";
import RecipeManualId from "../recipe/recipeWmanualId";


export default class FilterIngredient extends Component {

    static contextType = RecipeContext 
    
  componentDidMount() {
    RecipeApiService.getRecipe().then((result) => {
      this.context.loadRecipeData(result);
    });
  }

  render() {
    let { ingred } = this.context;
    let result;
    if (this.context.search === true) {
      result = <RecipeManualId />;
    } else result = null;
    return (
      <div className="ingredFilt-container">
        <div className="left">
          <p>Add the ingredients you have</p>
          <form>
            {ingred.map((val, idx) => {
              let catId = `i-${idx}`;
              return (
                <div key={idx}>
                  <input
                    type="text"
                    name={catId}
                    data-id={idx}
                    id={catId}
                    value={ingred[idx].name}
                    className="name"
                    onChange={this.context.handleIngredFiltChange}
                    required
                  />
                </div>
              );
            })}
            <button
              className="add-more-ingred"
              type="button"
              onClick={this.context.addIngredField}
            >
              + add more ingredient
            </button>
            <button
              className="search"
              onClick={(e) => this.context.handleIngredFiltSubmit(e)}
            >
              search
            </button>
          </form>
        </div>

        <div className="right">
          <p>You can make...</p>
          {result}
        </div>
      </div>
    );
  }
}
