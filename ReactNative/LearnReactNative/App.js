import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Box from './components/Box';
import Counter from './components/Counter';

function App() {
  return (
    <SafeAreaView style={styles.full}>
      <Counter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
