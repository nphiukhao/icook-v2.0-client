import React from 'react'
import Dashboard from './dashboard'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Dashboard component`, () => {
    it('Dashboard snapshot test', () => {
        const tree = shallow(<Dashboard/>)
        expect(toJson(tree)).toMatchSnapshot()
    })
})