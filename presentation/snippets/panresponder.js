import React from "react";
import { Animated, PanResponder } from "react-native";

export default class App extends React.Component {
  // still using Animated
  position = new Animated.Value(0);

  // handle touches
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    // bind touch x coordinates to animated value
    onPanResponderMove: Animated.event([null, { dx: this.position }])
  });

  render() {
    const translateX = this.position;
    const rotate = this.position.interpolate({
      inputRange: [-100, +100],
      outputRange: ["-30deg", "30deg"]
    });

    return (
      <Animated.View style={{ transform: [{ translateX }, { rotate }] }}>
        <Box {...this.panResponder.panHandlers} />
      </Animated.View>
    );
  }
}
