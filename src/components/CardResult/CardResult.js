import React from 'react'
import PropTypes from 'prop-types'
import Text from 'components/Text'
import Icon from 'components/Icon'
import VerticalSpacer from 'components/VerticalSpacer'
import { Container, Result, Input } from './styles'

export default function CardResult (props) {
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
          <Text>12.345.678/0001-23</Text>
          <Input>
            <input type='radio' />
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

}
