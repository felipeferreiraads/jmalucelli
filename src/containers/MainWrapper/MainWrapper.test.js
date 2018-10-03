import React from 'react'
import { shallow } from 'enzyme'
import MainWrapper from '.'

it('renders without crashing', () => {
  shallow(<MainWrapper />)
})
