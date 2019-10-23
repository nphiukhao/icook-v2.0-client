import React from 'react'
import ReactDOM from 'react-dom';
import RecipeManualId from './recipeWmanualId'


it(`Renders without crashing`, () => {

    const div = document.createElement('div')
    ReactDOM.render(<RecipeManualId />, div)
    ReactDOM.unmountComponentAtNode(div);
});