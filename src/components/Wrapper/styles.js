import styled from 'styled-components'
import { prop } from 'styled-tools'

export const StyledWrapper = styled.div`
  height: 100%;
  background-image: linear-gradient(to bottom, ${prop('theme.colors.secondary')}, ${prop('theme.colors.primary')});
`