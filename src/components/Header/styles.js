import styled from 'styled-components'
import { prop } from 'styled-tools'

export const StyledHeader = styled.header`
  height: 70px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, ${prop('theme.colors.secondary')}, ${prop('theme.colors.primary')});
`

export const Info = styled.div`
  flex: 1;
  padding: 0 25px;
`

export const User = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  overflow: hidden;
  background: ${prop('theme.colors.gray')};
  display: flex;
  justify-content: center;
  align-items: center;
`
