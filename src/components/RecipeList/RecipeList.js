import React from "react";
import { Link } from 'react-router-dom'

export default function RecipeList(props) {
  const { id, title } = props;
  // console.log('in RecipeList and this is props:',props)
  return (
    <div className="recipe-card">
      <img
        src={`https://spoonacular.com/recipeImages/${id}-312x150.jpg`}
        alt={`${title}`}
      />
      <p>{title}</p>
      <Link to={`/browse/${id}`}>{title}</Link>
    </div>
  );
}
