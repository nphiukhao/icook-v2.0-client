import React from 'react'
import LoginForm from './login-form'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`login form component`, () => {
    it('Login form snapshot test', () => {
        const tree = shallow(<LoginForm/>)
        expect(toJson(tree)).toMatchSnapshot()
    })
})