import Animated from 'react-native-reanimated';

// Floor a value to lower, whole integer
export const floor = a => Animated.round(Animated.sub(a, 0.5));

// Limit a value to minimum and maximum bounds
export const limit = (a, min, max) => Animated.min(max, Animated.max(min, a));

// Run a custom spring animation
export const runSpring = (clock, value, velocity) => {
  const state = {
    finished: new Animated.Value(0),
    position: new Animated.Value(0),
    velocity: new Animated.Value(0),
    time: new Animated.Value(0),
  };

  const config = {
    // When velocity is positive, zoom to snap point `1`, otheriwse
    // target snap point `0`
    toValue: Animated.cond(
      Animated.greaterThan(velocity, 0),
      new Animated.Value(1),
      new Animated.Value(0)
    ),
    // Some spring behaviour config:
    damping: 7.5,
    mass: 1.2,
    stiffness: 121.6,
    overshootClamping: true,
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
  };

  return Animated.block([
    // Reset state when we're starting the clock
    Animated.cond(
      Animated.not(Animated.clockRunning(clock)), [
        Animated.set(state.finished, 0),
        Animated.set(state.velocity, velocity),
        Animated.set(state.position, value),
        Animated.set(state.time, 0),
        Animated.startClock(clock),
      ]
    ),
    // Run the animation and stop the clock when we're done
    Animated.spring(clock, state, config),
    Animated.cond(state.finished, Animated.stopClock(clock)),
    state.position
  ]);
};
