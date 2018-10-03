import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${prop('theme.colors.grayLight')};
  display: flex;
  justify-content: center;
  align-items: center;
`
