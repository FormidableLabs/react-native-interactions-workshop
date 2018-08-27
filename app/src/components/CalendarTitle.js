import React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';

const Wrapper = styled.View`
  background-color: blue;
  flex-grow: 1;
`;

const Title = styled(Animated.Text).attrs({ numberOfLines: 2 })`
  color: white;
  font-size: 12px;
`;

const CalendarTitle = ({ tweenState, title }) => {
  const opacity = tweenState
    ? tweenState.interpolate({
        inputRange: [0, 0.2, 1],
        outputRange: [1, 0, 0]
      })
    : 1;

  return (
    <Wrapper>
      <Title style={{ opacity }}>{title}</Title>
    </Wrapper>
  );
};

export default CalendarTitle;
