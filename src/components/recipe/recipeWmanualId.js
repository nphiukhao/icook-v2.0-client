import React, { Component } from 'react'
import RecipeContext from '../../context/RecipeContext'
import './recipeM.css'

export default class RecipeManualId extends Component {

    static contextType = RecipeContext


    render() {
        console.log(this.context)
        if(this.context.recipeId){
            const { ingredients, instructions, title, minutes } = this.context
            return (
                <div className='recipeM-container'>
                    <h2>{title} </h2>
                    <div>
                        <p><span>Ingredients:</span> {ingredients}</p>
                        <p><span>Instructions:</span> {instructions}</p>
                        <p><span>Total Cooking Time:</span> {minutes} mins.</p>
                    </div>
                </div>
            )
        }
        else {
            return null
        }

    }
}
