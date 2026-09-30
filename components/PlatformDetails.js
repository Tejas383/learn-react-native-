import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const PlatformDetails = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Platform</Text>

      <Text>{Platform.OS}</Text>

      {Platform.OS === 'android' ? (
        <View style={{ height: 100, width: 100, backgroundColor: 'red' }} />
      ) : (
        <View style={{ height: 100, width: 100, backgroundColor: 'green' }} />
      )}

      <View style={styles.box} />

      <Text>{JSON.stringify(Platform)}</Text>
      {/* from here, we can see all the details, and can use them in normal json format */}
      <Text>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: Platform.OS === 'android' ? 'orange' : 'blue',
    height: 100,
    width: 100,
  },
});

export default PlatformDetails;
