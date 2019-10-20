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
        return fetch(`http://localhost:8000/time/${value}`, {
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
        // const options = {
        //     method: 'DELETE',
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // }
        // fetch(`http://localhost:8000/recipe/${id}`, options)
    }
}

export default RecipeApiService