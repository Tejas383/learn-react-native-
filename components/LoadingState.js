import React, { useState } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';

const LoadingState = () => {
  const [show, setShow] = useState(false);

  const showIndicator = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Activity Indicator</Text>

      <ActivityIndicator size={100} color="gold" animating={show} />
      {show ? (
        <ActivityIndicator size="large" color="red" animating={show} />
      ) : null}
      <Button title="show indicator" onPress={showIndicator} />
    </View>
  );
};

export default LoadingState;
