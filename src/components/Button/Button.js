import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'components/Icon'
import { StyledButton } from './styles'

export default function Button ({ text, color, background, ...props }) {
  return (
    <StyledButton
      color={color}
      background={background}
      {...props}
    >
      <span>{text}</span>
      <Icon icon='long-arrow-right' />
    </StyledButton>
  )
}

Button.propTypes = {
  /** Text do botão */
  text: PropTypes.string.isRequired,

  /** Cor do texto */
  color: PropTypes.string.isRequired,

  /** cor do background */
  background: PropTypes.string.isRequired
}

Button.defaultProps = {
  color: 'primary',
  background: 'white'
}
