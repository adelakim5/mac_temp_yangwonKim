import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Counter(props) {
  const [currNum, setCurrNum] = useState(0);

  const add = () => {
    setCurrNum(currNum + 1);
  };

  const extract = () => {
    setCurrNum(currNum - 1);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{currNum}</Text>
      </View>
      <Button title="+" onPress={add} />
      <Button title="-" onPress={extract} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
});

export default Counter;
