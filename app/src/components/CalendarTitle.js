import React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

const Title = styled(Animated.Text)`
  color: white;
  font-size: 12px;
  line-height: 15px;
`;

const CalendarTitle = ({ tweenState, title }) => {
  const opacity = tweenState
    ? tweenState.interpolate({
        inputRange: [0, 0.2, 1],
        outputRange: [1, 0, 0]
      })
    : 1;

  return <Title style={{ opacity }}>{title}</Title>;
};

export default CalendarTitle;
