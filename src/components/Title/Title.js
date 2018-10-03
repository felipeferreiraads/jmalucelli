import React from 'react'
import Text from 'components/Text'

export default function Title (props) {
  return (
    <Text
      component='h1'
      font='secondary'
      size={{
        default: '40px',
        large: '35px',
        medium: '30px',
        small: '25px',
        xsmall: '20px'
      }}
      lineHeight={{
        default: '1.5',
        small: '1.3'
      }}
      {...props}
    />
  )
}
