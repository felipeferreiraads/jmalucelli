import React from 'react'
import { Link } from 'react-router-dom'
import Screen from 'components/Screen'
import Container from 'components/Container'
import Wrapper from 'components/Wrapper'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Title from 'components/Title'
import Text from 'components/Text'
import routes from 'config/routes'

export default function HomeScreen (props) {
  return (
    <Screen title='Home'>
      <Container>
        <Wrapper>
          <Icon
            icon='line-chart'
            color='white'
            size='20px'
          />
          <Title
            size='22px'
            color='white'
          >
            Cotação de seguros
          </Title>
          <Text
            size='12px'
            color='white'
            style={{ fontWeight: 500 }}
          >
            Solução inovadora da lider de mercado
          </Text>
          <Button
            as={Link}
            to={routes.quotation}
            text='Iniciar'
            color='primary'
            background='white'
          />
        </Wrapper>
      </Container>
    </Screen>
  )
}
