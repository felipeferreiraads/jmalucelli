import React from 'react'
import { Form, Field } from 'react-final-form'
import Screen from 'components/Screen'
import Container from 'components/Container'
import Header from 'components/Header'
import Button from 'components/Button'
import CardResult from 'components/CardResult'
import CustomField from 'components/CustomField'
import LabelError from 'components/LabelError'
import { Wrapper, Bottom, Filter, Number } from './styles'
import * as forms from 'utils/forms'
import Quote from 'api/Quote'

export default class QuotationScreen extends React.Component {
  state = {
    cnpj: '',
    error: ''
  }

  handleSubmit = data => {
    this.setState({data: []})

    Quote.fetch(data.cnpj)
      .then(res => {
        if(res) {
          this.setState({
            cnpj: res,
            error: ''
          })
        } else {
          this.setState({
            error: 'Nenhum CNPJ encontrado.'
          })
        }
      })
  }

  render () {
    return (
      <Screen title='Cotação'>
        <Container>
          <Form
            onSubmit={this.handleSubmit}
          >
            {({ handleSubmit, pristine, submitting, form }) => (
              <form onSubmit={handleSubmit}>
                <Wrapper>
                  <div>
                    <Header />
                    <Filter>
                      <Number>1</Number>
                      <Field
                        name='cnpj'
                        placeholder='Buscar por CNPJ ou empresa'
                        component={CustomField}
                        {...forms.cnpjRequired}
                      />
                    </Filter>
                    {this.state.cnpj && (
                      <CardResult cnpj={this.state.cnpj} />
                    )}
                    {this.state.error && (
                      <LabelError>
                        {this.state.error}
                      </LabelError>
                    )}
                  </div>
                  <Bottom>
                    <Button
                      text='OK'
                      color='white'
                      background='blue'
                    />
                  </Bottom>
                </Wrapper>
              </form>
            )}
          </Form>
        </Container>
      </Screen>
    )
  }
}
