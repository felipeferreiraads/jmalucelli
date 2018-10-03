import React from 'react'
import { shallow } from 'enzyme'
import Title from '.'

it('renders without crashing', () => {
  shallow(<Title>Title</Title>)
})
