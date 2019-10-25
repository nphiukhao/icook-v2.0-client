import React from 'react'

import Recipe from './recipeWParamsId'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'


const routeProps = {
    match: {
        params: {
            id: 1
        }
    }
}

describe(`Recipe component`, () => {
    it('Recipe in recipeWParamsId snapshot test', () => {
        const tree = shallow(<Recipe {...routeProps} />)
        expect(toJson(tree)).toMatchSnapshot()
    })
})

