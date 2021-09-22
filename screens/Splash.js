import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { useCode, cond, eq, set, withTiming } from 'react-native-reanimated';
import { withTimingTransition } from 'react-native-redash';

const Splash = () => {
  // const spinValue = new Animated.Value(0);
  // const width = new Animated.Value(360);
  // const height = new Animated.Value(600);
  // useEffect(() => {
  //   Animated.timing(
  //     width, // The animated value to drive
  //     {
  //       toValue: 360, // Animate to opacity: 1 (opaque)
  //       duration: 450, // Make it take a while
  //       useNativeDriver: false,
  //     }
  //   ).start(); // Starts the animation
  //   Animated.timing(
  //     height, // The animated value to drive
  //     {
  //       toValue: 750, // Animate to opacity: 1 (opaque)
  //       duration: 10000, // Make it take a while
  //       useNativeDriver: false,
  //     }
  //   ).start(); // Starts the animation
  // }, []);

  // // First set up animation
  // Animated.timing(spinValue, {
  //   toValue: 1,
  //   duration: 100,
  //   easing: Easing.linear, // Easing is an additional import from react-native
  //   useNativeDriver: true, // To make use of native driver for performance
  // }).start();

  // // Next, interpolate beginning and end values (in this case 0 and 1)
  // const spin = spinValue.interpolate({
  //   inputRange: [0, 1, 2, 3, 4, 5],
  //   outputRange: ['-30deg', '0deg', '30deg', '0deg', '-30deg', '0deg'],
  // });

  // const scale = useRef(new Animated.Value(0));
  // const animattionScale = withTimingTransition(scale.current);

  // useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);

  const springValue = new Animated.Value(0.3);

  _springAnimation = () => {
    Animated.spring(springValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: false,
    }).start();
  };

  _springAnimation();

  return (
    <View>
      <View style={styles.container}>
        <Animated.Image
          source={require('../images/Logo/Logo.png')}
          style={[
            styles.image,
            {
              transform: [{ scale: springValue }],
              width:250,
              height:200,
              alignSelf: 'center',
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'black',
  },
  image: {
    marginVertical: '100%',
    marginHorizontal: '10%',
  },
});
