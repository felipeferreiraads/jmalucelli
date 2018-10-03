import React from 'react'
import Text from 'components/Text'
import Icon from 'components/Icon'
import VerticalSpacer from 'components/VerticalSpacer'
import { StyledHeader, Info, User } from './styles'

export default function Header () {
  return (
    <StyledHeader>
      <Icon
        icon='line-chart'
        color='white'
        size='18px'
      />
      <Info>
        <VerticalSpacer spacing={5}>
          <Text
            color='white'
            size='14px'
          >
            Nova cotação
          </Text>
          <Text
            color='white'
            size='14px'
          >
            #0980
          </Text>
        </VerticalSpacer>
      </Info>
      <User>
        <Icon
          icon='user'
          color='white'
          size='20px'
        />
      </User>
    </StyledHeader>
  )
}

