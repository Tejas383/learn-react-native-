import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResponsiveUIusingFlex = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Responsive UI using Flex</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 2, backgroundColor: 'red' }}>
          <Text style={styles.text}>helloo</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Text style={styles.text}>helloo</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'green' }}>
          <Text style={styles.text}>helloo</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ResponsiveUIusingFlex;
