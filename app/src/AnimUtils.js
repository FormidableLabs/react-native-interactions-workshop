import Animated from 'react-native-reanimated';

export const floor = a => Animated.round(Animated.sub(a, 0.5));

export const condCached = (cond, _if, _else) => {
  const val = new Animated.Value(_else);

  return Animated.cond(
    cond,
    Animated.cond(
      Animated.eq(val, _else),
      Animated.set(val, _if),
      val
    ),
    Animated.set(val, _else)
  );
};
