import React, { Component } from 'react';
import Animated from 'react-native-reanimated';

import data from '../data';
import * as theme from '../theme';

import { Container, Header } from '../components/misc';
import EventItems from '../components/EventItems';
import CalendarLayout from '../components/CalendarLayout';
import CalendarColumns from '../components/CalendarColumns';

const initialScrollY = 8 * theme.calendar.HOUR_HEIGHT;

class Home extends Component {
  constructor(props) {
    super(props);

    this.indexState = new Animated.Value(-1);
    this.zoomState = new Animated.Value(0);
  }

  render() {
    const {
      navigation: { navigate }
    } = this.props;

    return (
      <Container>
        <Header
          indexState={this.indexState}
          zoomState={this.zoomState}
          labels={data.map(x => x.label)}
          titles={data.map(x => x.title)}
        />

        <CalendarLayout
          zoomState={this.zoomState}
          initialScrollY={initialScrollY}
        >
          {({ gestureHandlerRef }) => (
            <CalendarColumns
              indexState={this.indexState}
              zoomState={this.zoomState}
              gestureHandlerRef={gestureHandlerRef}
            >
              {i => <EventItems data={data[i]} navigate={navigate} />}
            </CalendarColumns>
          )}
        </CalendarLayout>
      </Container>
    );
  }
}

export default Home;
