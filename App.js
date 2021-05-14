import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.main}>Hello</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    color: 'red',
  },
});
export default App;
