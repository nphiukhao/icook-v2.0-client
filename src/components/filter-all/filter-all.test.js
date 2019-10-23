import React from 'react'
import ReactDOM from 'react-dom';
import FilterAll from './filter-all-recipe'


it(`Renders without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<FilterAll />, div)
    ReactDOM.unmountComponentAtNode(div);

});