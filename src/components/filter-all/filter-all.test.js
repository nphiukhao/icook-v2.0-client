import React, { Component } from 'react'
import FilterAll from './filter-all-recipe'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PropTypes from 'prop-types'


class ContextProvider extends Component {

    static childContextTypes = {
        myContext: PropTypes.object
    }

    getChildContext = () => ({
        myContext: {
            recipeArray: [{
                date_modified: "2019-10-17T10:45:28.356Z",
                id: 1,
                instructions: "Cook fettuccini in a pot",
                minutes: 35,
                title: "Chicken Fettuccine Alfredo",
            },{
                date_modified: "2019-10-17T10:45:28.356Z",
                id: 2,
                instructions: "Cook fettuccini in a pot",
                minutes: 35,
                title: "Chicken Fettuccine Alfredo",
            },
            ]
        }
    })
    render(){
        return this.props.children
      }
}

describe(`Filter all componenet`, () => {
    it('filter all snapshot test', () => {
        const tree = shallow(<ContextProvider><FilterAll /></ContextProvider>)
        expect(toJson(tree)).toMatchSnapshot()
    })
})