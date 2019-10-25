import React from 'react'
import Navbar from './navbar'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`nav bar component`, () => {
    it('nav bar snapshot test', () => {
        const tree = shallow(<Navbar/>)
        expect(toJson(tree)).toMatchSnapshot()
    })
})