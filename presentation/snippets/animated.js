import React, { Component } from React;
import { View, Button, Animated } from 'react-native';

class Hideable extends Component {
  // define an animated value
  animation = new Animated.Value(1);

  state = {
    hidden: false
  };

  hide = () => {
    // run animation imperatively
    Animated.spring(this.animation, { toValue: 0 }).start(() => {
      this.setState({ hidden: true })
    });
  }

  render() {
    // interpolate
    const opacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1]
    });

    return (
        <Animated.View style={{ opacity }}>
          <Box backgroundColor="purple">
            <Button text="Hide me!" onPress={this.hide} />
          </Box>
        </Animated.View>
    )
  }
}