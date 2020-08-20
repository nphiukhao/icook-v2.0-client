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
    diet: ""
  };

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

  toggleAS = (e) => {
    e.preventDefault()
    this.setState({
      showAS: !this.state.showAS
    })
  }

  setDiet = (e, diet) => {
    e.preventDefault()
    //console.log("set diet", diet, e.target.value)
    this.setState({
      [diet]: e.target.value
    })
  }

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
    return <>
    <h4>Diet</h4>
    <div className="dietFilters">
      <button onClick={(e) => this.setDiet(e, "diet")} type="button" style={{background: `${this.state.diet === "Gluton Free" ? "rgba(92, 146, 85)" : "white"}`}} value="Gluton Free">Gluten Free</button>
      <button onClick={(e) => this.setDiet(e, "diet")} type="button" style={{background: `${this.state.diet === "Ketogenic" ? "rgba(92, 146, 85)" : "white"}`}} value="Ketogenic">Ketogenic</button>
      <button onClick={(e) => this.setDiet(e, "diet")} type="button" style={{background: `${this.state.diet === "Vegetarian" ? "rgba(92, 146, 85)" : "white"}`}} value="Vegetarian">Vegetarian</button>
      <button onClick={(e) => this.setDiet(e, "diet")} type="button" style={{background: `${this.state.diet === "Lacto-Vegetarian" ? "rgba(92, 146, 85)" : "white"}`}} value="Lacto-Vegetarian">Lacto-Vegetarian</button>
      <button onClick={(e) => this.setDiet(e, "diet")} type="button" style={{background: `${this.state.diet === "Ovo-Vegetarian" ? "rgba(92, 146, 85)" : "white"}`}} value="Ovo-Vegetarian">Ovo-Vegetarian</button>
      <button onClick={(e) => this.setDiet(e, "diet")} type="button" style={{background: `${this.state.diet === "Vegan" ? "rgba(92, 146, 85)" : "white"}`}} value="Vegan">Vegan</button>
      <button onClick={(e) => this.setDiet(e, "diet")} type="button" style={{background: `${this.state.diet === "Pescetarian" ? "rgba(92, 146, 85)" : "white"}`}} value="Pescetarian">Pescetarian</button>
      <button onClick={(e) => this.setDiet(e, "diet")} type="button" style={{background: `${this.state.diet === "Paleo" ? "rgba(92, 146, 85)" : "white"}`}} value="Paleo">Paleo</button>
      <button onClick={(e) => this.setDiet(e, "diet")} type="button" style={{background: `${this.state.diet === "Primal" ? "rgba(92, 146, 85)" : "white"}`}} value="Primal">Primal</button>
      <button onClick={(e) => this.setDiet(e, "diet")} type="button" style={{background: `${this.state.diet === "Whole30" ? "rgba(92, 146, 85)" : "white"}`}} value="Whole30">Whole30</button>
    </div>
    <button className="advanceSearchbutton" onClick={(e) => this.setDiet(e, "diet")} type="button" value="">reset diet</button>
    </>
  }

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
    console.log("state diet =>", this.state.diet)
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
          <button className="advanceSearchbutton" type="button" onClick={e => this.toggleAS(e)}> advance search </button>
          <div>
            {this.state.showAS ? this.renderAS() : null}
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
