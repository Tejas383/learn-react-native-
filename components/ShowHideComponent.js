import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const ShowHideComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Show/Hide Component</Text>
      <Button title="change visibility" onPress={() => setVisible(!visible)} />
      <Text>{visible ? 'visible' : null}</Text>
      {visible ? <Text>visible</Text> : null}
      <Text>hellloooo</Text>
    </View>
  );
};

export default ShowHideComponent;
