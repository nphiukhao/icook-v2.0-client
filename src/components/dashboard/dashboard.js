import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'

export default class Dashboard extends Component {

    render() {
        return (
            <div className='dashboard-container'>
                <h1>Welcome to ICook!</h1>
                <div className='options'>

                    <Link to={'/all'} className='dashboard-div' style={{ textDecoration: 'none' }}>
                        <p> See All Recipes</p>
                        <div className='allfiltLogo'></div>

                    </Link>


                    <Link to={'/time'} className='dashboard-div' style={{ textDecoration: 'none' }}>
                        <p> Filter by Time </p>
                        <div className='timefiltLogo'></div>

                    </Link>


                    <Link to={'/ingredient'} className='dashboard-div' style={{ textDecoration: 'none' }}>
                        <p> Filter by Ingredients </p>
                        <div className='infiltLogo'></div>
                    </Link>

                </div>
            </div>
        )
    }
}
