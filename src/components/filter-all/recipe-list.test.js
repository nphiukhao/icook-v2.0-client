import React from 'react'
import Recipelist from './recipe-list'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Recipe list component`, () => {
    it('Recipe list snapshot test', () => {
        const tree = shallow(<Recipelist/>)
        expect(toJson(tree)).toMatchSnapshot()
    })
})