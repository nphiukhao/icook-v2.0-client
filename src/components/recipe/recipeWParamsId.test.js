import React from 'react'
import ReactDOM from 'react-dom';
import Recipe from './recipeWParamsId'


it(`Renders without crashing`, () => {

    const routeProps = {
        match: {
            params: {
                id: 1
            }
        }
    }

    const div = document.createElement('div')
    ReactDOM.render(<Recipe {...routeProps}/>, div)
    ReactDOM.unmountComponentAtNode(div);
});