import React, { Component } from 'react'
import AuthService from '../../services/AuthService'
import TokenService from '../../services/TokenService'
import RecipeContext from '../../context/RecipeContext'
import './login-form.css'

export default class LoginForm extends Component {

    state = {
        error: ''
    }
    static contextType = RecipeContext 

    successLogin = () => {
        this.setState({
            error: ''
        })
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
        this.context.setLogin(true)
    }
    // handleRegister = () => {
    //     console.log('registering')
    // }

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
            this.successLogin()
        })
        .catch(err => this.setState({error: err.error }) )
    }

    render() {
        let renderError
        if(this.state.error) {
            renderError = <p className='login-error'>{this.state.error}</p>
        }
        return (
            <div className='login-container'>
                <p>login</p>
                <div className='demo'>
                    <p>demo username: Iam</p>
                    <p>demo password: Legit</p>
                </div>
                <form onSubmit={this.handleLogin}>
                    <input id='user_name' name='user_name' required placeholder='Username'></input>
                    <input id='password' name='password' type='password' required placeholder='Password'></input>
                    {renderError}
                    <button type='submit'>login</button>
                </form>
                {/* <button onClick={() => this.handleRegister()}>register</button> */}

            </div>
        )
    }
}
