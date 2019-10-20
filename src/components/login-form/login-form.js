import React, { Component } from 'react'
import AuthService from '../../services/AuthService'
import TokenService from '../../services/TokenService'
import RecipeContext from '../../context/RecipeContext'

export default class LoginForm extends Component {

    static contextType = RecipeContext 

    successLogin = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
        this.context.setLogin(true)
    }

    handleLogin = (e) => {
        e.preventDefault()

        const { user_name, password } = e.target
        AuthService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            console.log('login successul!')
            this.successLogin()
        })
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <label htmlFor='user_name'>Username: </label>
                    <input id='user_name' name='user_name' required></input>
                    <label htmlFor='password'>Password: </label>
                    <input id='password' name='password' type='password' required></input>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}
