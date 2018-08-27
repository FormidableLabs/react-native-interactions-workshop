import React from 'react';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Transition } from 'react-navigation-fluid-transitions';
import CalendarTitle from './CalendarTitle';

const Item = styled(RectButton).attrs({
  underlayColor: 'white',
  activeOpacity: 0.5
})`
  flex-grow: 0;
  flex-shrink: 1;
  margin: 1px;
  padding: 2px;
`;

const Background = styled.View``;

const Title = styled.Text.attrs({ numberOfLines: 2 })`
  flex-grow: 1;
  color: white;
  font-size: 10px;
`;

const CalendarItem = ({ item, onPress }) => (
  <Item onPress={onPress}>
    <Transition shared={`eventTitle-${item.slug}`} animated="tweenState">
      <CalendarTitle title={item.title} />
    </Transition>
  </Item>
);

export default CalendarItem;
