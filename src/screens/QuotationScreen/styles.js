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

export const Filter = styled.div`
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