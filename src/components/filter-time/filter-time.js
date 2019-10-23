import React, { Component } from 'react'
import Recipelist from '../filter-all/recipe-list'
import RecipeContext from '../../context/RecipeContext'
import RecipeApiService from '../../services/RecipeServices'
import './filter-time.css'

export default class FilterTime extends Component {

    state = {
        selectedVal: '',
    }
    static contextType = RecipeContext 

    handleSelected = (e) => {
        console.log('selected changed')
        this.setState({
            selectedVal: e.target.value
        })
    }

    getResult = () => {
        this.context.clearRecipeArray()
        console.log('fetching filtered results')
        //////loading the recipeArray with the filtered out ones only
        RecipeApiService.getByTime(this.state.selectedVal)
            .then(result => this.context.loadRecipeData(result))
    }

    renderResults = () => {
        console.log(this.context.recipeArray)
        return this.context.recipeArray.map(recipe => 
            <Recipelist 
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                instructions={recipe.instructions}
                minutes={recipe.minutes}
            />
            )
    }

    componentDidMount() {
        //////making sure the recipeArray is loaded first 
        RecipeApiService.getRecipe()
          .then(result => {
              this.context.loadRecipeData(result)
              console.log(this.context)
        })
    }

    render() {
        return (
            <div className='filter-time'>
                <div className='select-container'>
                    <select 
                        value={this.state.selectedVal}
                        onChange={this.handleSelected}
                    >
                        <option value=''>Select Minutes</option>
                        <option value='25'>less than 25 mins</option>
                        <option value='35'>25-35 mins</option>
                        <option value='45'>35-45 mins</option>
                        <option value='55'>45-55 mins</option>
                    </select>
                    <button onClick={this.getResult}>filter</button>
                </div>
                <div>
                    {this.renderResults()}
                </div>
            </div>
        )
    }
}
