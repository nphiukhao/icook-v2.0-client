import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to ICook!</h2>
                <Link to={'/recipe/all'}>
                    <div>
                        <p> see all recipes</p>
                    </div>
                </Link>
                <Link to={'/recipe/time'}>
                    <div>
                        <p> filter by time </p>
                    </div>
                </Link>
                <Link to={'/recipe/ingredient'}>
                    <div>
                        <p> filter by ingredients </p>
                    </div>
                </Link>
            </div>
        )
    }
}
