import React from 'react'
import ReactDOM from 'react-dom';
import Recipelist from './recipe-list'
import { MemoryRouter } from 'react-router-dom'


it(`Renders without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<MemoryRouter><Recipelist /></MemoryRouter>, div)
    ReactDOM.unmountComponentAtNode(div);
});