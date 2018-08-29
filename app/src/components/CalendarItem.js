import React from 'react';
import styled from 'styled-components/native';
import { getHours, getMinutes } from 'date-fns';
import { RectButton } from 'react-native-gesture-handler';
import { Transition } from 'react-navigation-fluid-transitions';

import * as theme from '../theme';
import CalendarTitle from './CalendarTitle';

const { HOUR_HEIGHT } = theme.calendar;

const Wrapper = styled.View`
  flex-direction: column;
  align-items: stretch;
  border-top-width: 1px;
  border-top-color: white;
`;

const Item = styled(RectButton).attrs({
  underlayColor: 'white',
  activeOpacity: 0.5
})`
  flex-direction: column;
  align-items: stretch;
`;

const Card = styled.View`
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  align-items: stretch;

  background-color: ${p => p.theme.colors.card};
  border-radius: 4px;
  padding: 4px;
`;

const CalendarItem = ({ item, style, onPress }) => {
  const height = style.height || 0;

  return (
    <Wrapper style={style}>
      <Item onPress={onPress}>
        <Transition shared={`eventTitle-${item.slug}`} animated="tweenState">
          <Card style={{ height }}>
            <CalendarTitle title={item.title} />
          </Card>
        </Transition>
      </Item>
    </Wrapper>
  );
};

export default CalendarItem;
