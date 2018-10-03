import React from 'react'
import PropTypes from 'prop-types'
import Text from 'components/Text'
import Icon from 'components/Icon'
import VerticalSpacer from 'components/VerticalSpacer'
import { Container, Result, Input } from './styles'
import { cnpj as format } from 'utils/formatters'

export default function CardResult ({ cnpj }) {
  return (
    <Container>
      <VerticalSpacer spacing={15}>
        <Text
          size='12px'
          color='border'
        >
          CNPJ / Empresa
        </Text>
        <Result>
          <Text>{format(cnpj)}</Text>
          <Input>
            <input type='checkbox' />
            <Icon
              icon='check-circle'
              color='white'
              size='14px'
            />
          </Input>
        </Result>
      </VerticalSpacer>
    </Container>
  )
}

CardResult.propTypes = {
  /** CNPJ do card */
  cnpj: PropTypes.string.isRequired
}
