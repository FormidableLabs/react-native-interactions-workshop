import React from 'react';
// import { Animated } from 'react-native';
// import { Transition } from 'react-navigation-fluid-transitions';

import {
  Wrapper,
  Touchable,
  Card,
  Title,
  Speaker
} from './Item.styles'

const CardWithContent = ({ height, item }) => {
  return (
    <Card height={height} isTalk={item.isTalk}>
      <Title expand={!item.profile}>{item.title}</Title>
      {item.profile && <Speaker>{item.profile.name}</Speaker>}
    </Card>
  );
};

const Item = ({ item, style, onPress }) => {
  const height = style.height || 0;

  return (
    <Wrapper style={style}>
      <Touchable onPress={onPress}>
        <CardWithContent height={height} item={item} />
      </Touchable>
    </Wrapper>
  );
};

export default Item;
