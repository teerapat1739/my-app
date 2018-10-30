import 'react-testing-library/cleanup-after-each'

import 'jest-dom/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'
import App from './index'

it('renders without crashing', () => {
    const div = document.createElement('div')
    render(<App />)
})
