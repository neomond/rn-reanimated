import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Reanimated from './src/ReanimatedTask1';
import ReanimatedTask2 from './src/ReanimatedTask2';

const App = () => {
  return (
    <View>
      <Reanimated />
      <ReanimatedTask2 />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
