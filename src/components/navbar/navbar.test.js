import React, {Component} from 'react'
import Navbar from './navbar'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PropTypes from 'prop-types'

class ContextProvider extends Component {

    static childContextTypes = {
        myContext: PropTypes.object
    }

    getChildContext = () => ({
        myContext: {
            isLoggedIn: true
        }
    })
    render(){
        return this.props.children
    }
}

describe(`nav bar component`, () => {
    it('nav bar snapshot test', () => {
        const tree = shallow(<ContextProvider><Navbar /></ContextProvider>)
        expect(toJson(tree)).toMatchSnapshot()
    })
})