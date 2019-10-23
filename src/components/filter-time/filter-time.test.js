import React from 'react'
import ReactDOM from 'react-dom';
import FilterTime from './filter-time'


it(`Renders without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<FilterTime />, div)
    ReactDOM.unmountComponentAtNode(div);
});