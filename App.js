import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

const App = () => {
  const showToast = () => {
   Alert.alert('Hello Shubham');
  };

  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={showToast} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;