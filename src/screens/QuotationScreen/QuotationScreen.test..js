import React from 'react'
import { shallow } from 'enzyme'
import ScreenQuotation from '.'

it('renders without crashing', () => {
  shallow(<QuotationScreen />)
})
