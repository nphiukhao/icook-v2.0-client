import React, {Component} from 'react'
import FilterTime from './filter-time'
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


describe(`Filter by Time component`, () => {
    it('filter by time snapshot test', () => {
        const tree = shallow(<ContextProvider><FilterTime/></ContextProvider>)
        expect(toJson(tree)).toMatchSnapshot()
    })
})