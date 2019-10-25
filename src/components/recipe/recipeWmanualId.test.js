
import React from 'react'
import RecipeManualId from './recipeWmanualId'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`RecipeWManualId component`, () => {
    it('RecipeManualId snapshot test', () => {
        const tree = shallow(<RecipeManualId/>)
        expect(toJson(tree)).toMatchSnapshot()
    })
})
