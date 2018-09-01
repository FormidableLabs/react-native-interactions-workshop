import React, { Component } from 'react';
import Animated from 'react-native-reanimated';

import data from '../data';

import Container from '../components/Container';
import Header from '../components/Header';
import CalendarRow from '../components/CalendarRow';
import CalendarColumns from '../components/CalendarColumns';
import CalendarSidebar from '../components/CalendarSidebar';
import CalendarItemStack from '../components/CalendarItemStack';

/**
 * Calendar view
 */
class Home extends Component {
  indexState = new Animated.Value(-1);
  zoomState = new Animated.Value(0);

  render() {
    const {
      navigation: { navigate }
    } = this.props;
    const headerLabels = data.map(x => x.label);
    const headerTitles = data.map(x => x.title);

    return (
      <Container>
        <Header
          indexState={this.indexState}
          zoomState={this.zoomState}
          labels={headerLabels}
          titles={headerTitles}
        />

        <CalendarRow sidebar={<CalendarSidebar />} zoomState={this.zoomState}>
          {({ gestureHandlerRef }) => (
            <CalendarColumns
              indexState={this.indexState}
              zoomState={this.zoomState}
              gestureHandlerRef={gestureHandlerRef}
            >
              {i => <CalendarItemStack data={data[i]} navigate={navigate} />}
            </CalendarColumns>
          )}
        </CalendarRow>
      </Container>
    );
  }
}

export default Home;
