import {
  RotationGestureHandler,
  PinchGestureHandler
} from "react-native-gesture-handler";

class PinchableBox extends React.Component {
  pinch = new Animated.Value(0);

  render() {
    const imagePinch = React.createRef();
    const imageRotation = React.createRef();
    return (
      <RotationGestureHandler
        ref={imageRotation}
        simultaneousHandlers={imagePinch}
        onGestureEvent={this._onRotateGestureEvent}
        onHandlerStateChange={this._onRotateHandlerStateChange}
      >
        <Animated.View>
          <PinchGestureHandler
            ref={imagePinch}
            simultaneousHandlers={imageRotation}
            onGestureEvent={Animated.event([
              { nativeEvent: { contentOffset: { x: this.pinch } } }
            ])}
          >
            <Animated.View style={styles.container} collapsable={false}>
              <Animated.Image style={[styles.pinchableImage]} />
            </Animated.View>
          </PinchGestureHandler>
        </Animated.View>
      </RotationGestureHandler>
    );
  }
}
