import React from 'react'
import ReactDOM from 'react-dom';
import FilterIngredient from './filter-ingredient'


it(`Renders without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<FilterIngredient />, div)
    ReactDOM.unmountComponentAtNode(div);
});