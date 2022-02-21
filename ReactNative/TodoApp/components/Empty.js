import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Empty(props) {
  return (
    <View style={styles.block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.desc}>야호! 할 일이 없습니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 250,
    height: 250,
    // backgroundColor: 'gray',
  },
});

export default Empty;
