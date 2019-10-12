import React, { Component } from 'react'

export default class FilterTime extends Component {
    render() {
        return (
            <div>
                <h2>Select cooking time</h2>
                <select>
            
                    <option value='< 45 min'>less than 25 mins</option>
                    <option value='< 25 min'>25-35 mins</option>
                    <option value='< 35 min'>35-45 mins</option>
                    <option value='< 45 min'>45-55 mins</option>


                </select>
            </div>
        )
    }
}
