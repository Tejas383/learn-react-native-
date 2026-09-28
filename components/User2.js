import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const User2 = props => {
  useEffect(() => {
    console.warn('count updated');
  }, [props.info.count]);

  useEffect(() => {
    console.warn('data updated');
  }, [props.info.data]);

  return (
    <View>
      <Text>count : {props.info.count}</Text>
      <Text>data : {props.info.data}</Text>
    </View>
  );
};

export default User2;
