import React, { Component } from 'react'
import RecipeContext from '../../context/RecipeContext'

export default class Recipe extends Component {

    // state = {
    //     ingredients: null,
    //     instructions: '',
    //     title: '',
    //     minutes: '',
    // }
    static contextType = RecipeContext

    // setIngred = (result) => {
    //     console.log(result, 'in setIngred function')
    //     let ingredArray = result.map(object => {
    //         return object.name
    //     })
    //     ingredArray = ingredArray.join(', ')
    //     console.log(this.context.recipeArray)
    //     let recipe = this.context.recipeArray.find(({ id }) => id == this.props.match.params.id)
    //     console.log(recipe)
    //     this.setState({
    //         ingredients: ingredArray, 
    //         instructions: recipe.instructions,
    //         title: recipe.title,
    //         minutes: recipe.minutes
    //     })
    // }

    componentDidMount() {
        let id = this.props.match.params.id
        fetch(`http://localhost:8000/recipe/${id}`)
            .then(res => res.json())
            .then(result => this.context.setIngred(result, id))
            .catch(err => console.error(err))
    }

    render() {
        console.log(this.context)
        const { ingredients, instructions, title, minutes } = this.context
        return (
            <div>
                <h2>{title} </h2>
                <ul>
                    <li>Ingredients: {ingredients}</li>
                    <li>Instructions: {instructions}</li>
                    <li>Total Cooking Time: {minutes} min.</li>
                </ul>
                <button>Remove</button>

            </div>
        )
    }
}
