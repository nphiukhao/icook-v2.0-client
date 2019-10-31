import React, { Component } from 'react'
import AuthService from '../../services/AuthService'
import TokenService from '../../services/TokenService'
import RecipeContext from '../../context/RecipeContext'
import './login-form.css'

export default class LoginForm extends Component {

    state = {
        error: '',
        register: false
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

    setRegister = () => {
        this.setState({
            register: true
        })
    }
    handleRegister = (e) => {
        console.log('registering')
        e.preventDefault()
        const { user_name, password } = e.target
        AuthService.registerUser({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => console.log(res))

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
                this.successLogin()
            })
            .catch(err => this.setState({ error: err.error }))
    }

    render() {
        console.log(this.state)
        let renderError
        if (this.state.error) {
            renderError = <p className='login-error'>{this.state.error}</p>
        }
        let renderRegister
        if (this.state.register) {
            renderRegister = 
            <div className='register-container'> 
            <p>register</p>
            <form onSubmit={this.handleRegister}>
                <input id='user_name' name='user_name' required placeholder='Username'></input>
                <input id='password' name='password' type='password' required placeholder='Password'></input>
                {renderError}
                <button type='submit'>register</button>
            </form>
            </div>
        }
        return (
            <>
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
                <button onClick={() => this.setRegister()}>register now</button>
            </div>
            {renderRegister}
            </> 
        )
    }
}
