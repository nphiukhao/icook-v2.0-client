import React, { Component } from 'react';
import './add-recipe.css'
import TokenService from '../../services/TokenService'
import config from '../../config'


export default class AddRecipeForm extends Component {

  state = {
    newRecipe: {
      title: '',
      minutes: '',
      ingredient: '',
      instructions: ''

    }
  }

  updateNewRecipe = (e, inputName) => {
    let newRecipe = { ...this.state.newRecipe, [inputName]: e.target.value }
    this.setState({ newRecipe })
  }

  onSubmitHandle = (e) => {
    e.preventDefault()

    const data = {
      title: this.state.newRecipe.title,
      minutes: this.state.newRecipe.minutes,
      ingredient: this.state.newRecipe.ingredient,
      instructions: this.state.newRecipe.instructions
    }

    const options = {
      method: 'POST',
      headers: {
        'Authorization' : `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)

    }
    fetch(`${config.API_ENDPOINT}/add`, options)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('something went wrong')
      })
      

    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    
    return (
      <section className='form-container'>
        <form className='add-form' onSubmit={e => this.onSubmitHandle(e)}>
          <div className='split'>
            <div className='recipe-title'>
              <label htmlFor='recipe-title'>Recipe Title: </label>
              <input className='title field' id='recipe-title' name='recipe-title' type='text' required placeholder='Garlic Butter Steak'
                value={this.state.newRecipe.title}
                onChange={e => {
                  this.updateNewRecipe(e, 'title')
                }}
              ></input>
            </div>
            <div className='recipe-minutes'>
              <label htmlFor='recipe-minutes'>Total Cooking Time (minutes):</label>
              <input className='minutes field' id='recipe-minutes' name='recipe-minutes' type='text' required placeholder='45'
                value={this.state.newRecipe.minutes}
                onChange={e => {
                  this.updateNewRecipe(e, 'minutes')
                }}
              ></input>
            </div>
          </div>
          <div className='recipe-ingre'>
            <label htmlFor='recipe-ingre'>Ingredients Needed:</label>
            <textarea className='ingre field' id='recipe-ingre' name='recipe-ingre' type='text' required placeholder='fresh parsley, minced garlic, soy sauce, flat iron steak etc.'
              value={this.state.newRecipe.ingredient}
              onChange={e => {
                this.updateNewRecipe(e, 'ingredient')
              }}
            ></textarea>
          </div>
          <div className='recipe-instr'>
            <label htmlFor='recipe-instr'>Instructions:</label>
            <textarea className='instr field' id='recipe-instr' name='recipe-instr' type='text' required placeholder='Mix 1 tablespoon butter, parsley, garlic and soy sauce. Sprinkle steak with salt and pepper...'
              value={this.state.newRecipe.instructions}
              onChange={e => {
                this.updateNewRecipe(e, 'instructions');
              }}
            ></textarea>
          </div>
          <button className='addButton' type='submit'>Add Recipe</button>

        </form>
      </section>
    )
  }
}