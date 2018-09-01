import React from 'react';
import styled from 'styled-components/native';
import { Animated, Platform } from 'react-native';
import { getHours, getMinutes } from 'date-fns';
import { RectButton } from 'react-native-gesture-handler';
import { Transition } from 'react-navigation-fluid-transitions';

import * as theme from '../theme';
import CalendarTitle from './CalendarTitle';

const ellipsizeMode = Platform.select({
  ios: 'clip',
  android: 'tail'
});

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

  background-color: ${p =>
    p.isTalk ? theme.colors.card : theme.colors.inactive};
  border-radius: 4px;
  padding: 4px;
`;

const Title = styled.Text.attrs({
  allowFontScaling: false,
  numberOfLines: p => (p.expand ? 2 : 1),
  ellipsizeMode
})`
  flex-grow: 0;
  flex-shrink: 1;
  color: white;
  font-size: 12px;
  line-height: 15px;
`;

const Speaker = styled.Text.attrs({
  allowFontScaling: false,
  numberOfLines: 1,
  ellipsizeMode
})`
  flex-grow: 0;
  flex-shrink: 2;
  color: white;
  font-style: italic;
  font-size: 10px;
  line-height: 15px;
`;

const disappear = ({ progress, start, end }) => {
  const opacity = progress.interpolate({
    inputRange: [start, start, end],
    outputRange: [1, 1, 0]
  });

  return { opacity };
};

const AnimatedCard = ({ progress, height, item }) => {
  const opacity = progress
    ? progress.interpolate({
        inputRange: [0, 0.1, 1],
        outputRange: [1, 0, 0]
      })
    : 1;

  return (
    <Card style={{ height }} isTalk={item.isTalk}>
      <Animated.View
        style={{
          flexDirection: 'column',
          alignItems: 'stretch',
          flex: 1,
          opacity
        }}
      >
        <Title expand={!item.profile}>{item.title}</Title>
        {item.profile && <Speaker>{item.profile.name}</Speaker>}
      </Animated.View>
    </Card>
  );
};

const CalendarItem = ({ item, style, onPress }) => {
  const height = style.height || 0;

  return (
    <Wrapper style={style}>
      <Item onPress={onPress}>
        <Transition shared={`eventTitle-${item.slug}`} animated="progress">
          <AnimatedCard height={height} item={item} />
        </Transition>
      </Item>
    </Wrapper>
  );
};

export default CalendarItem;
