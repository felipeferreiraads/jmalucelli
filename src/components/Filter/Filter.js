import React from 'react'
import { Container, Number, Input } from './styles'

export default function Filter () {
  return (
    <Container>
      <Number>1</Number>
      <Input
        type='text'
        placeholder='Buscar por CNPJ ou empresa'
      />
    </Container>
  )
}
