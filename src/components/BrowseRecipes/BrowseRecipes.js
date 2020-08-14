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
  // state = {
  //   query: "",
  //   cuisine: null,
  //   diet: null
  // };

  static contextType = SpoonContext;

  // updateSearch = (e, searchParam) => {
  //   this.setState({ [searchParam]: e.target.value });
  // };
  // searchQuery = e => {
  //   e.preventDefault();
  //   // console.log("calling query call", this.state);

  //   fetch(
  //     `https://api.spoonacular.com/recipes/search?query=${this.state.query}&number=12&apiKey=90983f8a705146c39a2acfcb0c8b7f28`
  //   )
  //     .then(res =>
  //       !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  //     )
  //     .then(result => this.context.setResults(result.results));
  // };

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

  componentDidMount = () => {
    //console.log("COMPONENET DID MOUNT in BrowseRecipes");
    if (this.context.query === "") {
      this.context.clearData();
    } else {
      BrowseService.getResult(
        this.context.query,
        this.context.offset
      ).then((result) => this.context.setResults(result.results));
    }
  };
  render() {
    console.log("Rendering, should happen everytime offset is changed");
    return (
      <div className="browse-container">
        <form>
          <label htmlFor="search-box">lookup some recipes!</label>
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
          <div className="advanceSearch">

          </div>
        </form>
        <div className="results">
          {this.context.result.length === 0 ? null : this.renderRecipeCards()}
        </div>
        {this.context.result.length === 0 ? null : (
          <Pagination context={this.context} />
        )}
      </div>
    );
  }
}
