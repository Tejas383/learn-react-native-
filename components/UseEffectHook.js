import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import User2 from './User2';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  //   useEffect(() => {
  //     console.warn('Hello');
  //   });
  // happens on every mount and rerender

  //   useEffect(() => {
  //     console.warn('Hello');
  //   }, []);
  // happens only when component is mounted
  // similar to compoenentDidMount in class component

  //   useEffect(() => {
  //     console.warn('count: ', count);
  //   }, [count]);
  //   useEffect(() => {
  //     console.warn('data: ', data);
  //   }, [data]);
  // happens only when items in dependency array change
  // similar to compoenentDidUpdate in class component

  // useEffect hook on unmount in ShowHideComponent
  // it is used , because , functions like setInterval , setTimeOut work in the background,
  // so to prevent them from running in the bg, we need to cleanup (use clearInterval, clearTimeout when unmounting the component)

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Use Effect Hook</Text>
      <Button title="update count" onPress={() => setCount(count + 1)} />
      <Button title="update data" onPress={() => setData(data + 1)} />
      <User2 info={{ count, data }} />
    </View>
  );
};

export default UseEffectHook;
