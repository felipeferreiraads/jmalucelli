import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './icons.css'

const Container = styled.span`
  ${props => props.color && `color: ${props.theme.colors[props.color]};`}
  ${props => props.size && `font-size: ${props.size};`}
`

const IconStyled = styled.span`
  line-height: 0;
  color: inherit;
  font-size: inherit;
`

export default function Icon ({ icon, color, size, ...props }) {
  return (
    <Container color={color} size={size} {...props}>
      <IconStyled className={`icon-${icon}`} />
    </Container>
  )
}

Icon.propTypes = {
  /** Ícone */
  icon: PropTypes.string.isRequired,

  /** Cor do ícone */
  color: PropTypes.string,

  /** Tamanho do ícone */
  size: PropTypes.string
}
