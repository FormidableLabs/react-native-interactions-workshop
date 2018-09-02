import React, { Component, createRef } from 'react';
import { View, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import * as theme from '../../theme';
import Sidebar from './Sidebar';

const { HOUR_HEIGHT, SIDEBAR_OFFSET } = theme.calendar;

const Scrollable = styled(ScrollView).attrs({
  bounces: false,
  contentContainerStyle: {
    flexDirection: 'row',
    alignItems: 'stretch'
  }
})`
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
`;

const Content = styled.View.attrs({
  collapsable: false
})`
  width: ${p => p.theme.calendar.CONTAINER_WIDTH};
  flex-direction: row;
  align-items: stretch;
`;

const getBackgroundStyle = zoom => {
  const opacity = Animated.interpolate(zoom, {
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1]
  });

  const scaleX = Animated.interpolate(zoom, {
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 0.8, 1]
  });

  return {
    opacity,
    transform: [{ scaleX }]
  };
};

const getBorderStyle = zoom => {
  const alpha = Animated.interpolate(zoom, {
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1, 0]
  });

  const { strokeRgb } = theme.colors;
  const borderRightColor = Animated.color(
    strokeRgb[0],
    strokeRgb[1],
    strokeRgb[2],
    alpha
  );

  return { borderRightColor };
};

class CalendarLayout extends Component {
  constructor(props) {
    super(props);

    const zoomState = props.zoomState || new Animated.Value(0);

    this.bgStyle = getBackgroundStyle(zoomState);
    this.borderStyle = getBorderStyle(zoomState);
    this.waitFor = createRef();
    this.scrollView = createRef();
  }

  render() {
    const { waitFor } = this;
    const { children, initialScrollY } = this.props;
    const renderProps = { gestureHandlerRef: waitFor };
    const scrollPosition = { x: 0, y: initialScrollY + SIDEBAR_OFFSET };

    return (
      <Scrollable
        innerRef={this.scrollView}
        waitFor={theme.isAndroid ? waitFor : undefined}
        contentOffset={scrollPosition}
        onContentSizeChange={() => {
          // contentOffset not supported on Android
          if (Platform.OS === 'android' && this.scrollView.current) {
            this.scrollView.current.scrollTo(scrollPosition);
          }
        }}
      >
        <Animated.View style={[styles.sidebar, this.borderStyle]}>
          <Sidebar />
        </Animated.View>

        <Content>
          <Animated.View style={[styles.background, this.bgStyle]}>
            {backgroundRows}
          </Animated.View>

          {children(renderProps)}
        </Content>
      </Scrollable>
    );
  }
}

const styles = {
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: HOUR_HEIGHT * 24,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  row: {
    height: HOUR_HEIGHT,
    borderBottomWidth: theme.sizes.hairline,
    borderBottomColor: theme.colors.stroke
  },
  sidebar: {
    zIndex: 1,
    width: theme.calendar.SIDEBAR_WIDTH,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    borderRightWidth: theme.sizes.hairline,
    borderRightColor: theme.colors.stroke
  }
};

const backgroundRows = Array.from({ length: 23 }).map((_, i) => (
  <View key={i} style={styles.row} />
));

export default CalendarLayout;
