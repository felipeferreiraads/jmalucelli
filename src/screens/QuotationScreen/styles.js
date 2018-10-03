import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${prop('theme.colors.background')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Bottom = styled.div`
  padding: 20px;
`
