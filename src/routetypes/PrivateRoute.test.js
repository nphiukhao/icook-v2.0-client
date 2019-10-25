import React from 'react'
import PrivateRoute from './PrivateRoute'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`PrivateRoute component`, () => {
    it('PrivateRoute snapshot test', () => {
        const tree = shallow(<PrivateRoute/>)
        expect(toJson(tree)).toMatchSnapshot()
    })
})