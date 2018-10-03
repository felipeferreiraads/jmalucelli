import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`

export const Number = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid ${prop('theme.colors.primary')};
  line-height: 22px;
  text-align: center;
  margin-right: 20px;
  font-size: 14px;
  color: ${prop('theme.colors.primary')};
  font-weight: bold;
`

export const Input = styled.input`
  background: transparent;
  border: none;
  height: 25px;
  flex: 1;
  color: ${prop('theme.colors.text')};

  &::placeholder {
    opacity: 1;
  }
`
