import React, { Component } from 'react';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import Container from '../components/Container';
import Header from '../components/Header';
import CalendarRow from '../components/CalendarRow';

const Content = styled.View`
  flex-grow: 1;
  flex-direction: row;
  align-items: stretch;
`;

class Home extends Component {
  columnValues = [
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ];

  pinchScale = new Animated.Value(1);
  pinchFocalX = new Animated.Value(0);
  pinchFocalY = new Animated.Value(0);

  onPinchEvent = Animated.event([
    {
      nativeEvent: {
        scale: this.pinchScale,
        focalX: this.pinchFocalX,
        focalY: this.pinchFocalY,
      },
    },
  ]);

  onPinchStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.pinchScale.setValue(1);
    }
  };

  onContentLayout = ({ nativeEvent: { layout } }) => {

  };

  render() {
    return (
      <Container>
        <Header />
        <CalendarRow>
          <PinchGestureHandler onGestureEvent={this.onPinchEvent} onHandlerStateChange={this.onPinchStateChange}>
            <Content onLayout={this.onContentLayout}>
              {this.columnValues.map((value, index) => (
                <CalendarRow.Column key={index} />
              ))}
            </Content>
          </PinchGestureHandler>
        </CalendarRow>
      </Container>
    )
  }
}

export default Home;
