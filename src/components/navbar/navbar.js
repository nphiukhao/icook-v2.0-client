import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/TokenService'
import RecipeContext from '../../context/RecipeContext'

export default class Navbar extends Component {
    
    static contextType = RecipeContext

    logoutHandler = () => {
        console.log('logging out')
        TokenService.clearAuthToken()
        this.context.setLogin(false)
    }

    render() {
        console.log('navbar rendering')
        console.log(this.context.isLoggedIn)
        let loginLink
        if(this.context.isLoggedIn === false ) {
            loginLink = <Link to='/login'> login</Link>
        }
        return (
            <nav className='navbar'>
                <p>placeholder for logo</p>
                <Link to='/' className='logolink'> ICook</Link>
                {loginLink}
                <Link to='/add'> add new recipe</Link>
                <Link onClick={this.logoutHandler} to='/'>Logout</Link>
                
           </nav>
        )
    }

}
