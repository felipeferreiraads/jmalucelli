import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainWrapper from 'containers/MainWrapper'
import HomeScreen from 'screens/HomeScreen'
import QuotationScreen from 'screens/QuotationScreen'
import routes from 'config/routes'

export default function App () {
  return (
    <MainWrapper>
      <Switch>
        <Route
          exact
          path={routes.index}
          component={HomeScreen}
        />
        <Route
          path={routes.quotation}
          component={QuotationScreen}
        />
      </Switch>
    </MainWrapper>
  )
}
