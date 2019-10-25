import React from 'react'
import AddRecipeForm from './add-recipes'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Add Recipe component`, () => {
    it('add recipe snapshot test', () => {
        const tree = shallow(<AddRecipeForm/>)
        expect(toJson(tree)).toMatchSnapshot()
    })
})