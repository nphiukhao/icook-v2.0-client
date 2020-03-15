import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./RecipeList.css";

export default function RecipeList(props) {
  const { id, title, minutes, servings } = props;
  // console.log('in RecipeList and this is props:',props)
  return (
    <Link to={`/browse/${id}`} className="card-link">
      <div className="recipe-card">
        <img
          className="card-img"
          src={`https://spoonacular.com/recipeImages/${id}-312x150.jpg`}
          alt={`${title}`}
        />
        <div className="card-desc">
          <div className="card-text">{title}</div>
          <div className="card-text2">
            <p>
              <FontAwesomeIcon
                className="icon"
                icon={faClock}
                size="1x"
              ></FontAwesomeIcon>
              Minutes: {minutes}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon
                className="icon"
                icon={faUtensils}
                size="1x"
              ></FontAwesomeIcon>
              Servings: {servings}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
