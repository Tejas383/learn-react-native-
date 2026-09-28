import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const StyleWithButton = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Style With Button</Text>

      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.button1]}>Button 1</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    color: 'white',
    margin: 10,
    borderRadius: 5,
    padding: 5,
    shadowColor: 'black',
    elevation: 5,
    textAlign: 'center',
  },
  button1: {
    backgroundColor: 'pink',
    color: 'red',
  },
});

export default StyleWithButton;
