import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <p>placeholder for logo</p>
            <Link to='/' className='logolink'> ICook</Link>
            <Link to='/login'> login</Link>
            <Link to='/add'> add new recipe</Link>
       </nav>
    )
}
