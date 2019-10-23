import config from '../config'
import TokenService from '../services/TokenService'

const RecipeApiService = {
    getRecipe() {
        return fetch(`${config.API_ENDPOINT}/all`, {
            headers: {
                'authorization' : `bearer ${TokenService.getAuthToken()}`,
            },
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
                'authorization' : `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>             
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    deleteRecipe(id){
        console.log('in the delete function')
        

    },
    updateMinutes(id, newMinutes) {

        let data = newMinutes
        console.log(data, id)
        return fetch(`${config.API_ENDPOINT}/recipe/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newMinutes: data })
        })
        .then(res => console.log(res))
        .catch( err => {
            console.log(err)
        })
    }
}

export default RecipeApiService