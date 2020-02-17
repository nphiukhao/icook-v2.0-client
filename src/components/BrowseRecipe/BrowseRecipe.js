import React, { Component } from "react";
import SpoonContext from '../../context/SpoonContext'

export default class BrowseRecipe extends Component {

  static contextType = SpoonContext;



  componentDidMount() {
    let id = this.props.match.params.id
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=90983f8a705146c39a2acfcb0c8b7f28`)
      .then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
      .then(result => this.context.buildIngred(result.extendedIngredients))
  }
  renderIngredients = () => {
    console.log('rendering ingredients')
    return <ul className='ingredients'>
      {this.context.ingredients.map(ingred => {
        return (
        <li>{ingred.amount} {ingred.unit} {ingred.name}</li>
        )
      })}
    </ul>
  }

  render() {
    if (this.context.ingredients === []) {
      console.log('false and not empty')
    }
    if (this.context.ingredients) {
      console.log('true and is not empty')
    }
    return (
      <div>
        <h2> Single Recipe Page</h2>
        {this.context.ingredients ? this.renderIngredients() : null }
      </div>
    );
  }
}
