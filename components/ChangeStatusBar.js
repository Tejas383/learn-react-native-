import React, { useState } from 'react';
import { Button, StatusBar, Text, View } from 'react-native';

const ChangeStatusBar = () => {
  const [style, setStyle] = useState('default');
  const [hidden, setHidden] = useState(false);

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Status Bar</Text>
      <StatusBar barStyle={style} hidden={hidden} />
      <Button
        title="toggle status bar"
        color="magenta"
        onPress={() => setHidden(!hidden)}
      />
      <Button
        title="dark status bar"
        color="black"
        onPress={() => setStyle('dark-content')}
      />
      <Button
        title="light status bar"
        color="green"
        onPress={() => setStyle('light-content')}
      />
    </View>
  );
};

export default ChangeStatusBar;
