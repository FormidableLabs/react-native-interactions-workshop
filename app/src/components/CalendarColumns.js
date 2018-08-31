import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import * as AnimUtils from '../AnimUtils';
import * as theme from '../theme';

const {
  CELL_NUM,
  SIDEBAR_WIDTH,
  CONTAINER_WIDTH,
  CELL_WIDTH,
  PINCH_MAGNITUDE
} = theme.calendar;

// The offset that a given cell at `index` needs to move
// to be considered fully "zoomed", i.e. when `zoom := 1`
const getOffsetX = (index, zoom) =>
  Animated.cond(
    Animated.neq(index, -1),
    Animated.multiply(-1, index, zoom, CELL_WIDTH),
    0
  );

// Create a `width` value for each column that grows to the
// full container size when the column is being zoomed on
const getColumnWidths = (index, zoom) => {
  const arr = Array.from({ length: CELL_NUM });

  return arr.map((_, i) => {
    const width = Animated.add(
      Animated.cond(
        Animated.eq(index, i),
        Animated.multiply(CONTAINER_WIDTH - CELL_WIDTH, zoom),
        0
      ),
      CELL_WIDTH
    );

    return width;
  });
};

// Convert a `focalX` coordinate to a cell's index over time
const getFocalIndex = focalX =>
  Animated.floor(Animated.divide(focalX, CELL_WIDTH));

// Constrain value to [0, 1]
const applyZoomLimit = a => AnimUtils.limit(a, 0, 1);

// Apply active pinch to zoom value
const getZoomWithPinch = ({ zoom, isPinchActive, pinchScale }) => {
  const prevZoomState = new Animated.Value(0);

  const pinchZoom = applyZoomLimit(
    Animated.add(prevZoomState, Animated.multiply(
      PINCH_MAGNITUDE,
      Animated.sub(pinchScale, 1)
    ))
  );

  return Animated.cond(
    isPinchActive,
    Animated.set(zoom, pinchZoom),
    Animated.set(prevZoomState, zoom)
  );
};

// Snap to closed/open state when the pinch gesture ends
const getZoomWithSnapPoints = ({
  zoomClock,
  zoom,
  isPinchEnd,
  isAtSnapPoint,
  pinchVelocity
}) => {
  const shouldStart = Animated.and(isPinchEnd, Animated.not(isAtSnapPoint));

  return Animated.cond(
    shouldStart,
    AnimUtils.runSpring(zoomClock, zoom, pinchVelocity),
    zoom
  );
};

class CalendarColumns extends Component {
  constructor(props) {
    super(props);

    // The current column that is being zoomed (none is -1)
    const indexState = props.indexState || new Animated.Value(-1);
    // The current zoom state, where 0 is closed and 1 is opened
    const zoomState = props.zoomState || new Animated.Value(0);
    // The current snap point animation clock
    const zoomClock = new Animated.Clock();

    // Describes whether no column is zoomed in on
    const isClosed = Animated.eq(zoomState, 0);
    // Describes whether a column is zoomed in on
    const isOpen = Animated.eq(zoomState, 1);
    // Describes whether we're at either snap points
    const isAtSnapPoint = Animated.or(isClosed, isOpen);

    // The current pinch gesture state
    const pinchScale = new Animated.Value(1);
    const pinchFocalX = new Animated.Value(0);
    const pinchVelocity = new Animated.Value(0);
    const pinchState = new Animated.Value(-1);

    // Value flags for pinch state
    const isPinchActive = Animated.eq(pinchState, State.ACTIVE);
    const isPinchEnd = Animated.eq(pinchState, State.END);

    // Updates the zoomed index when all columns are closed and a gesture starts
    const updateFocalIndex = Animated.cond(
      Animated.and(isPinchActive, isClosed),
      Animated.set(indexState, getFocalIndex(pinchFocalX))
    );

    // Interrupts the running clock when a pinch gesture starts
    const pinchInterruptsClock = Animated.cond(
      Animated.and(isPinchActive, Animated.clockRunning(zoomClock)),
      Animated.stopClock(zoomClock)
    );

    // First apply our pinch gesture
    const zoomWithPinch = getZoomWithPinch({
      zoom: zoomState,
      isPinchActive,
      pinchScale
    });

    // Then apply our snap points
    const zoomWithSnap = getZoomWithSnapPoints({
      zoom: zoomWithPinch,
      zoomClock,
      isPinchEnd,
      isAtSnapPoint,
      pinchVelocity
    });

    // Lastly apply the final zoom value to zoomState
    // Also interrupt snap points when pinch gesture starts
    const zoom = Animated.block([
      pinchInterruptsClock,
      Animated.set(zoomState, zoomWithSnap)
    ]);

    // Apply indexState as index and update when all columns
    // are closed
    const index = Animated.block([updateFocalIndex, indexState]);

    this.containerStyle = {
      transform: [
        {
          translateX: getOffsetX(index, zoom)
        }
      ]
    };

    this.columnStyles = getColumnWidths(index, zoom).map(width => ({
      flexBasis: width
    }));

    this.onPinchEvent = Animated.event([
      {
        nativeEvent: {
          state: pinchState,
          scale: pinchScale,
          velocity: pinchVelocity,
          focalX: pinchFocalX
        }
      }
    ]);
  }

  render() {
    const { gestureHandlerRef, children } = this.props;

    return (
      <PinchGestureHandler
        ref={gestureHandlerRef}
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
    );
  }
}

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

export default CalendarColumns;
