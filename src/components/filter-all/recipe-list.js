import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Recipelist extends Component {


    render() {
        //console.log('in recipe component', this.props)
        const { id, title, minutes } = this.props
        return (
            <div>
                <Link to={`/recipe/${id}`}>
                    <h3>{title}</h3>
                    <h4>{minutes}</h4>                    
                </Link>
            </div>
        )
    }
}

//<button onClick={RecipeApiService.deleteRecipe(id)}>Remove</button>