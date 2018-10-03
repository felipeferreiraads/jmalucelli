import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/GlobalStyles'
import theme from 'config/theme'

export default function StyleguideWrapper (props) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <Router>
          <div {...props} />
        </Router>
      </React.Fragment>
    </ThemeProvider>
  )
}
