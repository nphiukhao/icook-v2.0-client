import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'

export default class Dashboard extends Component {

    render() {
        return (
            <div className='dashboard-container'>
                <div className='landing-section'>
                    <p className='dashhead'>don't know what to cook? <span>use ICook</span></p>
                    <p className='describution'>ICook is a recipe application built to save time, money, and headaches. 
                        Input your all your favorite recipes and let this application do all the work!</p>

                        <a href="#start" className='start' style={{ textDecoration: 'none' }} >explore now</a>
                </div>
                <section id='start' className='get-started'>
                    <p className='welcome'>Welcome to ICook!</p>
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
                </section>

            </div>
        )
    }
}
