import React, { Component } from "react";
import SpoonContext from "../../context/SpoonContext";
import config from "../../config";
import RecipeList from "../RecipeList/RecipeList";
import './BrowseRecipes.css'

export default class BrowseRecipes extends Component {
  state = {
    query: "",
    cuisine: null,
    diet: null
  };

  static contextType = SpoonContext;

  updateSearch = (e, searchParam) => {
    console.log("event", e.target.value);
    this.setState({ [searchParam]: e.target.value });
  };
  searchQuery = e => {
    e.preventDefault();
    console.log("calling query call", this.state);

    fetch(
      `${config.API_ENDPOINT}/search?query=${this.state.query}&apiKey=90983f8a705146c39a2acfcb0c8b7f28`
    )
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(result => this.context.setResults(result.results));
  };

  renderRecipeCards = () => {
    return this.context.result.map(result => (
      <RecipeList key={result.id} id={result.id} title={result.title} />
    ));
  };
  render() {
    return (
      <div className='browse-container'>
        <form>
          <label htmlFor="search-box">Search</label>
          <input
            type="text"
            id="search-box"
            name="search-box"
            onChange={e => this.updateSearch(e, "query")}
          ></input>
          <button onClick={e => this.searchQuery(e)}>search</button>
        </form>
        <div className="results">
          {this.context.result === [] ? null : this.renderRecipeCards()}
        </div>
      </div>
    );
  }
}
