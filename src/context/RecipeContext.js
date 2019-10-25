import React, { Component } from 'react'
import config from '../config'

export const recipe = {
    isLoggedIn: false,
    ingredients: null,
    recipeId: null,
    instructions: '',
    title: '',
    minutes: '',
    ingred: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
    search: false
}
const RecipeContext = React.createContext({
    isLoggedIn: null,
    recipeArray: [],
    ingredients: null,
    recipeId: null,
    instructions: '',
    title: '',
    minutes: '',
    ingred: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
    search: false,
    loadRecipeData: () => {},
    setIngred: () => {},
    setId: () => {},
    clearRecipeArray: () => {},
    setLogin: () => {},
    addIngredField: () => {},
    handleIngredFiltSubmit: () => {},
    handleIngredFiltChange: () => {},
    setSearchFalse: () => {},
    handleClientUpdate: ()=>{}
    
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
        ingred: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
        search: false,
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

    handleClientUpdate = (newMins) => {
        this.setState({
            minutes: newMins
        })
    }
    clearRecipeArray = () => {
        this.setState({ recipeArray: []})
    }

    setSearchFalse = () => {
        this.setState({
            search: false
        })
    }


    handleIngredFiltChange = (e) => {
        if (["name"].includes(e.target.className)) {
            let ingred = [...this.state.ingred]

            ingred[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ ingred })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    addIngredField = (e) => {
        this.setState((prevState) => ({
            ingred: [...prevState.ingred, { name: "" }],
        }));
    }

    handleIngredFiltSubmit = (e) => {
        e.preventDefault()
        let data = this.state.ingred.map(i => i.name)

        fetch(`${config.API_ENDPOINT}/ingred`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)

        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('something went wrong yo')
            })
            .then(result => this.setId(result.recipe_id))
            .then(after => {
                let id = this.state.recipeId
                return fetch(`${config.API_ENDPOINT}/recipe/${id}`)
                .then(res => res.json())
                .then(result => this.setIngred(result, id))
                .catch(err => console.error(err))
            })
            .then(after => this.setState({search: true}))

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
            setLogin: this.setLogin,
            handleIngredFiltSubmit: this.handleIngredFiltSubmit,
            handleIngredFiltChange: this.handleIngredFiltChange,
            ingred:this.state.ingred,
            addIngredField: this.addIngredField,
            search: this.state.search,
            setSearchFalse: this.setSearchFalse,
            handleClientUpdate: this.handleClientUpdate
        }
        return (
            <RecipeContext.Provider value={value}> 
                {this.props.children}
            </RecipeContext.Provider>
        )
        
    }
    
}