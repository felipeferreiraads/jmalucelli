import React from 'react'
import Screen from 'components/Screen'
import Container from 'components/Container'
import Header from 'components/Header'
import Filter from 'components/Filter'
import Button from 'components/Button'
import CardResult from 'components/CardResult'
import { Wrapper, Bottom } from './styles'

export default function QuotationScreen () {
  return (
    <Screen title='Cotação'>
      <Container>
        <Wrapper>
          <div>
            <Header />
            <Filter />
            <CardResult />
          </div>
          <Bottom>
            <Button
              text='OK'
              color='white'
              background='blue'
            />
          </Bottom>
        </Wrapper>
      </Container>
    </Screen>
  )
}
