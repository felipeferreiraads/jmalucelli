import styled from 'styled-components'
import { prop } from 'styled-tools'
import View from 'components/View'

const Base = View.filter([
  'focused',
  'invalid',
  'valid'
])

export const Container = styled.div`
  position: relative;
`

export const InputStyled = styled(Base)`
  background: transparent;
  border: none;
  height: 25px;
  flex: 1;
  color: ${prop('theme.colors.text')};

  &::placeholder {
    opacity: 1;
  }

  &[disabled] {
    cursor: not-allowed;
  }
`
