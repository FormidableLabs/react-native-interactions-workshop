import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import * as AnimUtils from '../AnimUtils';

const cellWidth = Dimensions.get('window').width / 8;

const Container = styled(Animated.View)`
  overflow: hidden;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: row;
  align-items: stretch;
`;

const Column = styled(Animated.View)`
  flex-direction: column;
  align-items: stretch;
  border-right-width: ${p => p.theme.sizes.hairline};
  border-right-color: ${p => p.theme.colors.stroke};
`;

class CalendarColumns extends Component {
  pinchScale = new Animated.Value(1);
  pinchFocalX = new Animated.Value(0);
  pinchState = new Animated.Value(-1);

  onPinchEvent = Animated.event([
    {
      nativeEvent: {
        state: this.pinchState,
        scale: this.pinchScale,
        focalX: this.pinchFocalX
      },
    },
  ]);

  constructor(props) {
    super(props);

    const length = 7;
    const scale = Animated.min(length, Animated.max(1, this.pinchScale));
    const pinchNorm = Animated.divide(Animated.sub(scale, 1), length - 1);
    const isActive = Animated.eq(this.pinchState, State.ACTIVE);

    const index = AnimUtils.condCached(
      isActive,
      AnimUtils.floor(Animated.divide(this.pinchFocalX, cellWidth)),
      -1
    );

    const offsetX = Animated.cond(
      isActive,
      Animated.multiply(-1, index, cellWidth, pinchNorm),
      0
    );

    this.containerStyle = {
      transform: [{ translateX: offsetX }]
    };

    this.columnStyles = Array.from({ length }).map((a, i) => {
      const width = Animated.cond(
        Animated.eq(index, i),
        Animated.multiply(cellWidth, scale),
        cellWidth
      );

      return { flexBasis: width };
    });
  }

  render() {
    const { renderColumn } = this.props;

    return (
      <Container onLayout={this.onContentLayout}>
        <PinchGestureHandler onGestureEvent={this.onPinchEvent} onHandlerStateChange={this.onPinchEvent}>
          <Container style={this.containerStyle}>
            {this.columnStyles.map((style, index) => (
              <Column style={style} key={index}>
                {renderColumn ? renderColumn(index) : null}
              </Column>
            ))}
          </Container>
        </PinchGestureHandler>
      </Container>
    );
  }
}

export default CalendarColumns;
