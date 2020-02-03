import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/TokenService'
import RecipeContext from '../../context/RecipeContext'
import './navbar.css'

export default class Navbar extends Component {
    
    static contextType = RecipeContext
    
    componentDidMount = () => {
        TokenService.hasAuthToken() ? this.context.setLogin(true) : this.context.setLogin(false)
    }

    render() {
        let loginLink
        if(this.context.isLoggedIn === false ) {
            loginLink = <Link to='/login' style={{ textDecoration: 'none'}}>login</Link>
        }
        return (
            <nav className='navbar'>
                <div className='logolink'>
                    <Link to='/' style={{ textDecoration: 'none'}}> ICook</Link>
                </div>
                <div className='navlinks'> 
                    {loginLink}
                </div>
           </nav>
        )
    }

}
