import React from 'react'
import { shallow } from 'enzyme'
import Wrapper from '.'

it('renders without crashing', () => {
  shallow(<Wrapper />)
})
