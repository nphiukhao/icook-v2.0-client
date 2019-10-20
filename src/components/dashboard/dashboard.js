import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to ICook!</h1>
                <Link to={'/all'}>
                    <div>
                        <p> see all recipes</p>
                    </div>
                </Link>
                <Link to={'/time'}>
                    <div>
                        <p> filter by time </p>
                    </div>
                </Link>
                <Link to={'/ingredient'}>
                    <div>
                        <p> filter by ingredients </p>
                    </div>
                </Link>
            </div>
        )
    }
}
