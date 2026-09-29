import React from 'react';
import { Pressable, Text, View } from 'react-native';

const PressableButton = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Pressable Button</Text>

      <Pressable
        onPress={() => {
          console.warn('normal press');
        }}
        onLongPress={() => {
          console.warn('long press');
        }}
        onPressIn={() => {
          console.warn('press in');
        }}
        onPressOut={() => {
          console.warn('press out');
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            backgroundColor: 'red',
            color: 'white',
          }}
        >
          Pressable Button
        </Text>
      </Pressable>
    </View>
  );
};

export default PressableButton;
