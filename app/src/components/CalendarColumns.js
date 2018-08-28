import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import * as AnimUtils from '../AnimUtils';
import * as theme from '../theme';

const cellWidth = Dimensions.get('window').width / 8;

const styles = {
  container: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    overflow: 'hidden'
  },
  column: {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingLeft: 2,
    paddingRight: 2,
    borderRightWidth: theme.sizes.hairline,
    borderRightColor: theme.colors.stroke
  }
};

class CalendarColumns extends Component {
  constructor(props) {
    super(props);

    const pinchScale = new Animated.Value(1);
    const pinchFocalX = new Animated.Value(0);
    const pinchState = new Animated.Value(-1);

    this.onPinchEvent = Animated.event([
      {
        nativeEvent: {
          state: pinchState,
          scale: pinchScale,
          focalX: pinchFocalX
        }
      }
    ]);

    const length = 7;
    const scale = Animated.min(length, Animated.max(1, pinchScale));
    const pinchNorm = Animated.divide(Animated.sub(scale, 1), length - 1);
    const isActive = Animated.eq(pinchState, State.ACTIVE);

    const index = AnimUtils.condCached(
      isActive,
      AnimUtils.floor(Animated.divide(pinchFocalX, cellWidth)),
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
    const { children } = this.props;

    return (
      <Animated.View style={styles.container} onLayout={this.onContentLayout}>
        <PinchGestureHandler
          onGestureEvent={this.onPinchEvent}
          onHandlerStateChange={this.onPinchEvent}
        >
          <Animated.View style={[styles.container, this.containerStyle]}>
            {this.columnStyles.map((style, index) => (
              <Animated.View style={[styles.column, style]} key={index}>
                {children ? children(index) : null}
              </Animated.View>
            ))}
          </Animated.View>
        </PinchGestureHandler>
      </Animated.View>
    );
  }
}

export default CalendarColumns;
