import {Button, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSpring,
  WithSpringConfig,
} from 'react-native-reanimated';

const ReanimatedTask1 = () => {
  const cube1PositionX = useSharedValue(0);
  const cube2PositionX = useSharedValue(0);
  const animationDuration = 250;
  const secondCubeAnimationDuration = 300;
  const bounceDuration = 300;
  const startPosition = 0;
  const middlePosition = 150;
  const endPosition = 300;
  const bounceConfig: WithSpringConfig = {
    damping: 10,
    stiffness: 100,
  };

  const handleMove = () => {
    cube1PositionX.value = withTiming(
      middlePosition,
      {duration: animationDuration, easing: Easing.linear},
      () => {
        cube1PositionX.value = withTiming(
          endPosition,
          {duration: animationDuration, easing: Easing.linear},
          () => {
            cube1PositionX.value = withSpring(
              middlePosition,
              {
                ...bounceConfig,
                duration: bounceDuration,
                easing: Easing.linear,
              } as WithSpringConfig,
              () => {
                cube1PositionX.value = withSpring(startPosition, {
                  ...bounceConfig,
                  duration: bounceDuration,
                  easing: Easing.linear,
                } as WithSpringConfig);
              },
            );
          },
        );
      },
    );

    cube2PositionX.value = withTiming(
      middlePosition,
      {duration: secondCubeAnimationDuration, easing: Easing.linear},
      () => {
        cube2PositionX.value = withTiming(
          endPosition,
          {duration: secondCubeAnimationDuration, easing: Easing.linear},
          () => {
            cube2PositionX.value = withSpring(
              middlePosition,
              {
                ...bounceConfig,
                duration: bounceDuration,
                easing: Easing.linear,
              } as WithSpringConfig,
              () => {
                cube2PositionX.value = withSpring(startPosition, {
                  ...bounceConfig,
                  duration: bounceDuration,
                  easing: Easing.linear,
                } as WithSpringConfig);
              },
            );
          },
        );
      },
    );
  };

  const cube1Style = useAnimatedStyle(() => {
    return {
      transform: [{translateX: cube1PositionX.value}],
    };
  });

  const cube2Style = useAnimatedStyle(() => {
    return {
      transform: [{translateX: cube2PositionX.value}],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.cube, cube1Style]} />
      <Animated.View style={[styles.cube, cube2Style]} />
      <Button title="Move" onPress={handleMove} />
    </SafeAreaView>
  );
};

export default ReanimatedTask1;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
  },
  cube: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#031A74',
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    color: 'blue',
  },
});
