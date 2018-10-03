import styled from 'styled-components'
import { prop } from 'styled-tools'

export const StyledWrapper = styled.div`
  height: 100%;
  background-image: linear-gradient(to bottom, ${prop('theme.colors.secondary')}, ${prop('theme.colors.primary')});
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  > *:not(:last-child) {
    margin-bottom: 30px;
  }
`