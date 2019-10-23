import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Recipelist extends Component {


    render() {
        const { id, title, minutes } = this.props
        return (
            <div className='recipe-links-container'>
                <Link to={`/recipe/${id}`} style={{ textDecoration: 'none'}} >
                    <h3>{title}</h3>
                    <h4>Total Cooking Time: {minutes} mins.</h4>                    
                </Link>
            </div>
        )
    }
}
