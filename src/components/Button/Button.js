import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

export default function Button ({ color, background, ...props }) {
  return (
    <StyledButton
      color={color}
      background={background}
      {...props}
    />
  )
}

Button.propTypes = {
  /** Cor do texto */
  color: PropTypes.string.isRequired,

  /** cor do background */
  background: PropTypes.string.isRequired
}

Button.defaultProps = {
  color: 'primary',
  background: 'white'
}
