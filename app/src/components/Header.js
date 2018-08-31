import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

import * as AnimUtils from '../AnimUtils';
import * as theme from '../theme';

const { CELL_NUM, SIDEBAR_WIDTH, CONTAINER_WIDTH, CELL_WIDTH } = theme.calendar;

const Outer = styled.SafeAreaView`
  flex-shrink: 0;
  background: ${p => p.theme.colors.header};
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.colors.stroke};
`;

const Inner = styled.View`
  height: 80px;
  padding-left: ${p => p.theme.calendar.SIDEBAR_WIDTH}px;

  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
`;

const TitleRow = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 25px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: stretch;
`;

const Title = styled.Text`
  text-align: left;
  font-size: 18px;
  color: ${p => p.theme.colors.text};
`;

const DateLabel = styled.Text`
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  color: ${p => p.theme.colors.label};
  padding: ${p => p.theme.sizes.mid} 0;
`;

const getFloatingPositions = (index, zoom) => {
  const arr = Array.from({ length: CELL_NUM });
  const opacity = Animated.interpolate(zoom, {
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 0]
  });

  return arr.map((_, i) => {
    const offsetX = i * CELL_WIDTH;
    const isZooming = Animated.eq(index, i);

    const translateX = Animated.interpolate(zoom, {
      inputRange: [0, 0.8, 1],
      outputRange: [0, -offsetX, -offsetX]
    });

    const translateY = Animated.interpolate(zoom, {
      inputRange: [0, 0.8, 1],
      outputRange: [0, -theme.sizes.mid / 2, -theme.sizes.mid / 2]
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

class Header extends Component {
  constructor(props) {
    super(props);

    const indexState = props.indexState || new Animated.Value(-1);
    const zoomState = props.zoomState || new Animated.Value(0);

    this.floatingPositions = getFloatingPositions(indexState, zoomState);
  }

  render() {
    const { labels } = this.props;

    return (
      <Outer>
        <Inner>
          <TitleRow>
            <Title>React Native EU</Title>
          </TitleRow>

          <Row>
            {labels.map((label, i) => (
              <Animated.Text
                key={label}
                style={[styles.columnLabel, this.floatingPositions[i]]}
              >
                {label.toUpperCase()}
              </Animated.Text>
            ))}
          </Row>
        </Inner>
      </Outer>
    );
  }
}

const styles = {
  columnLabel: {
    width: CELL_WIDTH,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 10,
    color: theme.colors.label,
    paddingTop: theme.sizes.mid,
    paddingBottom: theme.sizes.mid
  }
};

export default Header;
