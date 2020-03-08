import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

export default function RecipeList(props) {
  const { id, title } = props;
  // console.log('in RecipeList and this is props:',props)
  return (
    <div className="recipe-card">
      <img
        className="card-img"
        src={`https://spoonacular.com/recipeImages/${id}-312x150.jpg`}
        alt={`${title}`}
      />
      <div className="card-text">
        <Link to={`/browse/${id}`}>{title}</Link>
      </div>
    </div>
  );
}
