import React from 'react';
import { Animated, Platform } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';

import {
  Wrapper,
  Touchable,
  Card,
  Title,
  Speaker
} from './Item.styles'

const AnimatedCard = ({ progress, height, item }) => {
  const opacity = progress
    ? progress.interpolate({
        inputRange: [0, 0.1, 1],
        outputRange: [1, 0, 0]
      })
    : 1;

  return (
    <Card height={height} isTalk={item.isTalk}>
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

const Item = ({ item, style, onPress }) => {
  const height = style.height || 0;

  return (
    <Wrapper style={style}>
      <Touchable onPress={onPress}>
        <Transition shared={`eventTitle-${item.slug}`} animated="progress">
          <AnimatedCard height={height} item={item} />
        </Transition>
      </Touchable>
    </Wrapper>
  );
};

export default Item;
