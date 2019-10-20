import React, { Component } from 'react'
import './filter-ingred.css'

export default class FilterIngredient extends Component {

    state = {
        searchTerm: ''
    }
    render() {
        return (
            <div className='ingredFilt container'>
                <div className='left'>
                    <p>Add the ingredients you have!</p>
                    <form>
                        <input value=''></input>
                    </form>
                </div>
                <div className='right'>
                    result
                </div>
            </div>
        )
    }
}
