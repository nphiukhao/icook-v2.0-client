import config from '../../config'
import React, { Component } from 'react'
import RecipeContext from '../../context/RecipeContext'
import RecipeApiService from '../../services/RecipeServices'

import './recipe.css'

export default class Recipe extends Component {

    static contextType = RecipeContext

    state = {
        edit: false,
        newMin: null
    }
    handleEdit = (newMinutes) => {
        console.log(newMinutes, this.props.match.params.id)
        let id = this.props.match.params.id
        RecipeApiService.updateMinutes(id, newMinutes)
            .then(after => this.context.handleClientUpdate(newMinutes))

        this.setState({
            edit: false,
        })
    }
    handleDelete = () => {
        console.log(this.context.recipeId)
        
        fetch(`${config.API_ENDPOINT}/delete/${this.context.recipeId}`, {
            method: 'DELETE',
        })
        this.props.history.push('/')
    }

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
            <div className='recipe-container'>
                <h2>{title} </h2>
                <div>
                    <p><span>Ingredients:</span> {ingredients}</p>
                    <p><span>Instructions:</span> {instructions}</p>
                    {
                        this.state.edit
                        ? 
                        <span>Total Cooking Time:<input defaultValue={minutes} ref='minutes'/> 
                            <button className='update button' onClick={() => this.handleEdit(this.refs.minutes.value)}>Update</button>
                        </span>
                        :
                        <span>Total Cooking Time: {minutes}</span>
                    }
                </div>
                <div className='recipe-buttons'>
                    <button className='edit button' onClick={() => this.setState({edit: true})}>Edit</button> 
                    <button className='remove button' onClick={() => this.handleDelete()}>Remove</button>
                </div>
            </div>
        )
    }
}
