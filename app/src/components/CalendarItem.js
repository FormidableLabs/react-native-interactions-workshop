import React from 'react';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Transition } from 'react-navigation-fluid-transitions';

const Item = styled(RectButton).attrs({
  underlayColor: 'white',
  activeOpacity: 0.5
})`
  background-color: blue;
  flex-grow: 0;
  flex-shrink: 1;
  margin: 1px;
  padding: 2px;
`;

const Background = styled.View`
  flex-grow: 1;
`;

const Title = styled.Text.attrs({ numberOfLines: 2 })`
  color: white;
  font-size: 10px;
`;

const CalendarItem = ({ item, onPress }) => (
  <Item onPress={onPress}>
    <Transition shared={`eventTitle-${item.slug}`}>
      <Background>
        <Title>{item.title}</Title>
      </Background>
    </Transition>
  </Item>
);

export default CalendarItem;
