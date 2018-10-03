import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from 'components/GlobalStyles'
import theme from 'config/theme'

export default function StyleguideWrapper (props) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <Router>
          <React.Fragment {...props} />
        </Router>
      </React.Fragment>
    </ThemeProvider>
  )
}
