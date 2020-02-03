import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faBook,
  faCarrot,
  faClock,
  faPlus,
  faSearch,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import TokenService from "../../services/TokenService";
import RecipeContext from "../../context/RecipeContext";

import "./CommandBar.css";

export default class CommandBar extends Component {
  state = {
    active: false
  };

  static contextType = RecipeContext;

  logoutHandler = () => {
    TokenService.clearAuthToken();
    this.context.setLogin(false);
  };

  componentDidMount = () => {
    TokenService.hasAuthToken()
      ? this.context.setLogin(true)
      : this.context.setLogin(false);
  };

  render() {
    return (
      <>
        <nav className={this.state.active ? "commandBar-active" : "commandBar"}>
          <div
            className="arrow"
            onClick={() => {
              this.setState(prevState => ({ active: !prevState.active }));
            }}
          >
            {this.state.active ? (
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                size="2x"
              ></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                size="2x"
              ></FontAwesomeIcon>
            )}
          </div>
          <ul className={this.state.active ? "nav-active" : "nav-links"}>
            <li>
              <Link
                to={"/browse"}
                style={{ textDecoration: "none" }}
                onClick={() => this.setState({ active: false })}
              >
                browse recipes
                <FontAwesomeIcon
                  className="icon"
                  icon={faSearch}
                  size="1x"
                ></FontAwesomeIcon>
              </Link>
            </li>
            <li>
              <Link
                to={"/all"}
                style={{ textDecoration: "none" }}
                onClick={() => this.setState({ active: false })}
              >
                my recipes
                <FontAwesomeIcon
                  className="icon"
                  icon={faBook}
                  size="1x"
                ></FontAwesomeIcon>
              </Link>
            </li>
            <li>
              <Link
                to={"/time"}
                style={{ textDecoration: "none" }}
                onClick={() => this.setState({ active: false })}
              >
                cooking time
                <FontAwesomeIcon
                  className="icon"
                  icon={faClock}
                  size="1x"
                ></FontAwesomeIcon>
              </Link>
            </li>
            <li>
              <Link
                to={"/ingredient"}
                style={{ textDecoration: "none" }}
                onClick={() => this.setState({ active: false })}
              >
                ingredients filter
                <FontAwesomeIcon
                  className="icon"
                  icon={faCarrot}
                  size="1x"
                ></FontAwesomeIcon>
              </Link>
            </li>
            <li>
              <Link
                to={"/add"}
                style={{ textDecoration: "none" }}
                onClick={() => this.setState({ active: false })}
              >
                new recipe
                <FontAwesomeIcon
                  className="icon"
                  icon={faPlus}
                  size="1x"
                ></FontAwesomeIcon>
              </Link>
            </li>
          </ul>
          <ul className={this.state.active ? "bottom-command" : "nav-links" }>
            <li>
              <Link
                onClick={this.logoutHandler}
                to="/"
                style={{ textDecoration: "none" }}
              >
                logout
                <FontAwesomeIcon
                  className="icon"
                  icon={faSignOutAlt}
                  size="1x"
                ></FontAwesomeIcon>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
