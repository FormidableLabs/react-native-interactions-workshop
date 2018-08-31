import React, { Component, createRef } from 'react';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import * as theme from '../theme';
const { HOUR_HEIGHT } = theme.calendar;

const Wrapper = styled(ScrollView).attrs({
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
  border-right-width: ${p => p.theme.sizes.hairline};
  border-right-color: ${p => p.theme.colors.stroke};
  background-color: white;
`;

const Content = styled.View`
  width: ${p => p.theme.calendar.CONTAINER_WIDTH};
  flex-direction: row;
  align-items: stretch;
`;

class CalendarRow extends Component {
  waitFor = createRef();

  render() {
    const { waitFor } = this;
    const { sidebar, children } = this.props;
    const renderProps = { gestureHandlerRef: waitFor };

    return (
      <Wrapper waitFor={theme.isAndroid ? waitFor : undefined}>
        <Sidebar>
          {sidebar}
        </Sidebar>
        <Content>
          {children(renderProps)}
        </Content>
      </Wrapper>
    );
  }
}

export default CalendarRow;
