import React from 'react'
import { shallow } from 'enzyme'
import Container from '.'

it('renders without crashing', () => {
  shallow(<Container />)
})
