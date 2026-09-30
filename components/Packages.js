import React from 'react';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';

const Packages = () => {
  return (
    <View style={{}}>
      <Text style={{ fontSize: 40 }}>Packages</Text>
      <WebView
        style={{ height: 500 }}
        source={{
          uri: 'https://www.google.com',
        }}
      />
    </View>
  );
};

export default Packages;
