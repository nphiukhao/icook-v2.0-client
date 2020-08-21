import React, { Component } from "react";
import SpoonContext from "../../context/SpoonContext";
import config from "../../config";
import BrowseService from "../../services/BrowseService";
import RecipeList from "../RecipeList/RecipeList";
import Pagination from "../Pagination/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./BrowseRecipes.css";

export default class BrowseRecipes extends Component {
  state = {
    showAS: false,
  };

  static contextType = SpoonContext;

  toggleAS = (e) => {
    e.preventDefault();
    this.setState({
      showAS: !this.state.showAS,
    });
  };

  renderRecipeCards = () => {
    return this.context.result.map((result) => (
      <RecipeList
        key={result.id}
        id={result.id}
        title={result.title}
        minutes={result.readyInMinutes}
        servings={result.servings}
      />
    ));
  };

  renderAS = () => {
    return (
      <>
        <h4>Diet</h4>
        <div className="dietFilters">
          <button
            onClick={(e) => this.context.setDiet(e, "diet")}
            type="button"
            style={{
              background: `${
                this.context.diet === "Gluton Free"
                  ? "rgba(92, 146, 85)"
                  : "white"
              }`,
            }}
            value="Gluton Free"
          >
            Gluten Free
          </button>
          <button
            onClick={(e) => this.context.setDiet(e, "diet")}
            type="button"
            style={{
              background: `${
                this.context.diet === "Ketogenic"
                  ? "rgba(92, 146, 85)"
                  : "white"
              }`,
            }}
            value="Ketogenic"
          >
            Ketogenic
          </button>
          <button
            onClick={(e) => this.context.setDiet(e, "diet")}
            type="button"
            style={{
              background: `${
                this.context.diet === "Vegetarian"
                  ? "rgba(92, 146, 85)"
                  : "white"
              }`,
            }}
            value="Vegetarian"
          >
            Vegetarian
          </button>
          <button
            onClick={(e) => this.context.setDiet(e, "diet")}
            type="button"
            style={{
              background: `${
                this.context.diet === "Lacto-Vegetarian"
                  ? "rgba(92, 146, 85)"
                  : "white"
              }`,
            }}
            value="Lacto-Vegetarian"
          >
            Lacto-Vegetarian
          </button>
          <button
            onClick={(e) => this.context.setDiet(e, "diet")}
            type="button"
            style={{
              background: `${
                this.context.diet === "Ovo-Vegetarian"
                  ? "rgba(92, 146, 85)"
                  : "white"
              }`,
            }}
            value="Ovo-Vegetarian"
          >
            Ovo-Vegetarian
          </button>
          <button
            onClick={(e) => this.context.setDiet(e, "diet")}
            type="button"
            style={{
              background: `${
                this.context.diet === "Vegan" ? "rgba(92, 146, 85)" : "white"
              }`,
            }}
            value="Vegan"
          >
            Vegan
          </button>
          <button
            onClick={(e) => this.context.setDiet(e, "diet")}
            type="button"
            style={{
              background: `${
                this.context.diet === "Pescetarian"
                  ? "rgba(92, 146, 85)"
                  : "white"
              }`,
            }}
            value="Pescetarian"
          >
            Pescetarian
          </button>
          <button
            onClick={(e) => this.context.setDiet(e, "diet")}
            type="button"
            style={{
              background: `${
                this.context.diet === "Paleo" ? "rgba(92, 146, 85)" : "white"
              }`,
            }}
            value="Paleo"
          >
            Paleo
          </button>
          <button
            onClick={(e) => this.context.setDiet(e, "diet")}
            type="button"
            style={{
              background: `${
                this.context.diet === "Primal" ? "rgba(92, 146, 85)" : "white"
              }`,
            }}
            value="Primal"
          >
            Primal
          </button>
          <button
            onClick={(e) => this.context.setDiet(e, "diet")}
            type="button"
            style={{
              background: `${
                this.context.diet === "Whole30" ? "rgba(92, 146, 85)" : "white"
              }`,
            }}
            value="Whole30"
          >
            Whole30
          </button>
        </div>
        <button
          className="advanceSearchbutton"
          onClick={(e) => this.context.setDiet(e, "diet")}
          type="button"
          value=""
        >
          reset diet
        </button>
      </>
    );
  };

  componentDidMount = () => {
    //console.log("COMPONENET DID MOUNT in BrowseRecipes");
    if (this.context.query === "") {
      this.context.clearData();
    } else {
      BrowseService.getResult(
        this.context.query,
        this.context.offset,
        this.context.diet
      ).then((result) => this.context.setResults(result.results));
    }
  };
  render() {
    console.log("IN COMPONENT", this.context.totalResults);
    return (
      <div className="browse-container">
        <form>
          {/* <label htmlFor="search-box">lookup some recipes!</label> */}
          <div className="searchBar">
            <input
              type="search"
              id="search-box"
              name="search-box"
              placeholder="i.e. Blueberry Pie"
              onChange={(e) => this.context.updateSearch(e, "query")}
            ></input>
            <button onClick={(e) => this.context.searchQuery(e)}>
              <FontAwesomeIcon icon={faSearch} size="2x"></FontAwesomeIcon>
            </button>
          </div>
          <button
            className="advanceSearchbutton"
            type="button"
            onClick={(e) => this.toggleAS(e)}
          >
            {" "}
            advance search{" "}
          </button>
          <div>{this.state.showAS ? this.renderAS() : null}</div>
        </form>
        <h4>total results: {this.context.totalResults} recipes</h4>
        <div className="results">
          {this.context.result.length === 0 ? null : this.renderRecipeCards()}
        </div>
        {(this.context.result.length === 0 || this.context.totalResults <= 12) ? null : (
          <Pagination context={this.context}/>
        )}
      </div>
    );
  }
}
