import React, { Component, createRef } from 'react';
import { View, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import * as theme from '../theme';

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

const Sidebar = styled.View.attrs({
  zIndex: 1
})`
  width: ${p => p.theme.calendar.SIDEBAR_WIDTH};
  flex-direction: column;
  align-items: stretch;
  background-color: white;
`;

const Content = styled.View`
  width: ${p => p.theme.calendar.CONTAINER_WIDTH};
  flex-direction: row;
  align-items: stretch;
`;

class CalendarRow extends Component {
  waitFor = createRef();
  scrollView = createRef();

  constructor(props) {
    super(props);

    const zoomState = props.zoomState || new Animated.Value(0);

    const opacity = Animated.interpolate(zoomState, {
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1]
    });

    const scaleX = Animated.interpolate(zoomState, {
      inputRange: [0, 0.5, 1],
      outputRange: [0.8, 0.8, 1]
    });

    this.bgStyle = {
      opacity,
      transform: [{ scaleX }]
    };

    this.borderStyle = {
      opacity: Animated.sub(1, opacity)
    };
  }

  render() {
    const { waitFor } = this;
    const { sidebar, children, initialScrollY } = this.props;
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
        <Sidebar>
          <Animated.View style={[styles.border, this.borderStyle]} />
          {sidebar}
        </Sidebar>
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
  border: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRightWidth: theme.sizes.hairline,
    borderRightColor: theme.colors.stroke
  }
};

const backgroundRows = Array.from({ length: 23 }).map((_, i) => (
  <View key={i} style={styles.row} />
));

export default CalendarRow;
