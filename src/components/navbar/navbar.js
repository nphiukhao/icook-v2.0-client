import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/TokenService'
import RecipeContext from '../../context/RecipeContext'
import './navbar.css'

export default class Navbar extends Component {
    
    static contextType = RecipeContext

    logoutHandler = () => {
        console.log('logging out')
        TokenService.clearAuthToken()
        this.context.setLogin(false)
    }

    render() {
        //console.log('navbar rendering')
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
                    <Link to='/add' style={{ textDecoration: 'none'}}>+ new recipe</Link>
                    {loginLink}
                    <Link onClick={this.logoutHandler} to='/' style={{ textDecoration: 'none'}}>logout</Link>
                </div>
                
                
           </nav>
        )
    }

}
