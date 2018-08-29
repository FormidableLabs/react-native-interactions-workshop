import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import * as theme from '../theme';
const { HOUR_HEIGHT } = theme.calendar;

const Wrapper = styled.ScrollView.attrs({
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
  onRef = ref => {
    if (ref) {
      this.ref = ref;
    }
  };

  componentDidMount() {
    if (this.ref) {
      const y = HOUR_HEIGHT * 8;
      this.ref.scrollTo({ y });
    }
  }

  render() {
    const { sidebar, children } = this.props;

    return (
      <Wrapper innerRef={this.onRef}>
        <Sidebar>
          {sidebar}
        </Sidebar>
        <Content>
          {children}
        </Content>
      </Wrapper>
    );
  }
}

export default CalendarRow;
