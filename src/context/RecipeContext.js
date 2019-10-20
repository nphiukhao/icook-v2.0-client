import React, { Component } from 'react'

export const recipe = {
    isLoggedIn: false,
    ingredients: null,
    recipeId: null,
    instructions: '',
    title: '',
    minutes: '',
}
const RecipeContext = React.createContext({
    isLoggedIn: null,
    recipeArray: [],
    ingredients: null,
    recipeId: null,
    instructions: '',
    title: '',
    minutes: '',
    loadRecipeData: () => {},
    setIngred: () => {},
    setId: () => {},
    clearRecipeArray: () => {},
    setLogin: () => {}
})
export default RecipeContext

export class RecipeProvider extends Component {

    state = {
        isLoggedIn: false,
        recipeArray: [],
        ingredients: null,
        recipeId: null,
        instructions: '',
        title: '',
        minutes: '',
    }

    setLogin = (value) => {
        this.setState({
            isLoggedIn: value
        })
    }

    loadRecipeData = (result) => {
        this.setState({
            recipeArray: result
        })
    }

    setId = (id) => {
        this.setState({
            recipeId: id
        })
    }
    setIngred = (result, id) => {
        this.setId(id)
        let ingredArray = result.map(object => {
            return object.name
        })
        ingredArray = ingredArray.join(', ')
        let recipe = this.state.recipeArray.find(({ id }) => id == this.state.recipeId)
       
        this.setState({
            ingredients: ingredArray, 
            instructions: recipe.instructions,
            title: recipe.title,
            minutes: recipe.minutes
        })
    }
    clearRecipeArray = () => {
        console.log('clearning recipe array')
        this.setState({ recipeArray: []})
    }

    
    render() {
        const value = {
            isLoggedIn: this.state.isLoggedIn,
            recipeArray : this.state.recipeArray,
            ingredients: this.state.ingredients,
            recipeId: this.state.recipeId,
            instructions: this.state.instructions,
            title: this.state.title,
            minutes: this.state.minutes,
            loadRecipeData: this.loadRecipeData,
            setIngred: this.setIngred,
            setId: this.setId,
            clearRecipeArray: this.clearRecipeArray,
            setLogin: this.setLogin
        }
        return (
            <RecipeContext.Provider value={value}> 
                {this.props.children}
            </RecipeContext.Provider>
        )
        
    }
    
}