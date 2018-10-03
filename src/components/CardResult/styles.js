import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Container = styled.label`
  background: ${prop('theme.colors.white')};
  padding: 15px 20px 10px;
  cursor: pointer;
  display: block;
`

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Input = styled.div`
  position: relative;

  > input {
    position: absolute;
    top: 0;
    opacity: 0;
    margin: 0;
  }

  > input:checked + span {
    color: ${prop('theme.colors.success')};
  }
`
