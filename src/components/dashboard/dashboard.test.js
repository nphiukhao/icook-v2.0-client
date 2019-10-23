import React from 'react'
import ReactDOM from 'react-dom';
import Dashboard from './dashboard'
import { MemoryRouter } from 'react-router-dom'


it(`Renders without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<MemoryRouter><Dashboard /></MemoryRouter>, div)
    ReactDOM.unmountComponentAtNode(div);
});