import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const UseEffectUnmount = () => {
  const timer = setInterval(() => {
    console.warn('timer called');
  }, 2000);

  useEffect(() => {
    return () => clearInterval(timer);
  });

  return (
    <View>
      <Text>Use Effect on Coumponent Unmount</Text>
    </View>
  );
};

export default UseEffectUnmount;
