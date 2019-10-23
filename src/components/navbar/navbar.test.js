import React from 'react'
import ReactDOM from 'react-dom';
import Navbar from './navbar'
import { MemoryRouter } from 'react-router-dom'


it(`Renders without crashing`, () => {
    const div = document.createElement('div')
    ReactDOM.render(<MemoryRouter><Navbar /></MemoryRouter>, div)
    ReactDOM.unmountComponentAtNode(div);
});