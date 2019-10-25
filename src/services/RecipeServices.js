import config from '../config'
import TokenService from '../services/TokenService'

const RecipeApiService = {
    getRecipe() {
        return fetch(`${config.API_ENDPOINT}/all`, {
            headers: {
                'Authorization' : `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>             
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getRecipebyId(id) {
        return  fetch(`${config.API_ENDPOINT}/recipe/${id}`, {
            headers: {
                'Authorization' : `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res =>             
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getByTime(value) {
        return fetch(`${config.API_ENDPOINT}/time/${value}`, {
            headers: {
                'Authorization' : `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>             
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    updateMinutes(id, newMinutes) {

        let data = newMinutes
 
        return fetch(`${config.API_ENDPOINT}/recipe/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization' : `bearer ${TokenService.getAuthToken()}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newMinutes: data })
        })
        .catch( err => {
            console.log(err)
        })
    },
}

export default RecipeApiService