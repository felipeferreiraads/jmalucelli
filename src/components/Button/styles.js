import styled from 'styled-components'
import colorProp from 'utils/colorProp'
import { darken } from 'polished'

export const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  background: ${colorProp('background')};
  color: ${colorProp('color')};
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: .2s;
  text-decoration: none;

  &:hover {
    background-color: ${colorProp('background', darken(0.1))};
  }
`
