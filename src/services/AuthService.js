import config from '../config'

const AuthService = {
    postLogin(creds) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(creds)
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    registerUser(newUser) {
        return fetch(`${config.API_ENDPOINT}/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default AuthService