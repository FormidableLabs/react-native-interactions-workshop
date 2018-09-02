import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Constants } from 'expo';
import * as theme from '../theme';

const { CELL_NUM, CELL_WIDTH } = theme.calendar;

const Outer = styled.SafeAreaView`
  flex-shrink: 0;
  background: ${p => p.theme.colors.header};
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.colors.stroke};
  padding-top: ${Constants.statusBarHeight};
`;

const Inner = styled.View.attrs({
  collapsable: false
})`
  height: 80px;
  padding-left: ${p => p.theme.calendar.SIDEBAR_WIDTH}px;

  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
`;

const TitleRow = styled.View.attrs({
  collapsable: false
})`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 25px;
`;

const Title = styled.Text`
  text-align: left;
  font-size: 18px;
  color: ${p => p.theme.colors.text};
`;

const Row = styled.View.attrs({
  collapsable: false
})`
  flex-direction: row;
  align-items: stretch;
`;

const getFloatingPositions = (index, zoom) => {
  const arr = Array.from({ length: CELL_NUM });
  const opacity = Animated.interpolate(zoom, {
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 0]
  });

  return arr.map((_, i) => {
    const offsetX = -1 * i * CELL_WIDTH - theme.sizes.mid;
    const offsetY = -1 * theme.sizes.mid;
    const isZooming = Animated.eq(index, i);

    const translateX = Animated.interpolate(zoom, {
      inputRange: [0, 0.8, 1],
      outputRange: [0, offsetX, offsetX]
    });

    const translateY = Animated.interpolate(zoom, {
      inputRange: [0, 0.8, 1],
      outputRange: [0, offsetY, offsetY]
    });

    return {
      opacity: Animated.cond(isZooming, 1, opacity),
      transform: [
        { translateX: Animated.cond(isZooming, translateX) },
        { translateY: Animated.cond(isZooming, translateY) }
      ]
    };
  });
};

const getTitleOpacities = (index, zoom) => {
  const arr = Array.from({ length: CELL_NUM });
  const opacity = Animated.interpolate(zoom, {
    inputRange: [0, 0.1, 0.8, 1],
    outputRange: [0, 0, 1, 1]
  });

  return arr.map((_, i) => {
    const isZooming = Animated.eq(index, i);
    return { opacity: Animated.cond(isZooming, opacity, 0) };
  });
};

class Header extends Component {
  constructor(props) {
    super(props);

    const indexState = props.indexState || new Animated.Value(-1);
    const zoomState = props.zoomState || new Animated.Value(0);

    this.floatingPositions = getFloatingPositions(indexState, zoomState);
    this.titleOpacities = getTitleOpacities(indexState, zoomState);
  }

  render() {
    const { labels, titles } = this.props;

    return (
      <Outer>
        <Inner>
          <TitleRow>
            <Title>React Native EU</Title>
          </TitleRow>

          <Row>
            {labels.map((label, i) => {
              const title = titles[i];
              const floatPos = this.floatingPositions[i];
              const titleOpacity = this.titleOpacities[i];

              return (
                <Animated.View style={[styles.cell, floatPos]} key={label}>
                  <Text style={[styles.label]}>{label}</Text>
                  <Animated.Text
                    numberOfLines={1}
                    style={[styles.label, styles.title, titleOpacity]}
                  >
                    {title}
                  </Animated.Text>
                </Animated.View>
              );
            })}
          </Row>
        </Inner>
      </Outer>
    );
  }
}

const styles = {
  cell: {
    flexDirection: 'row',
    width: CELL_WIDTH
  },
  label: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 10,
    color: theme.colors.label,
    paddingLeft: theme.sizes.mid,
    paddingTop: theme.sizes.mid,
    paddingBottom: theme.sizes.mid
  },
  title: {
    flexShrink: 0,
    width: 3 * CELL_WIDTH,
    paddingLeft: 0
  }
};

export default Header;
