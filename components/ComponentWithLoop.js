import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import UserData2 from './UserData2';

const ComponentWithLoop = () => {
  const users = [
    {
      id: 1,
      name: 'Alka',
      email: 'alka@example.com',
    },
    {
      id: 2,
      name: 'Babita',
      email: 'babita@example.com',
    },
    {
      id: 3,
      name: 'Kajol',
      email: 'kajol@example.com',
    },
  ];

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Component in Loop using Map Funciton</Text>
      {users.map(item => (
        <UserData2 item={item} />
      ))}

      <Text style={{ fontSize: 40 }}>Component in Loop with Flatlist</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData2 item={item} />}
      />
    </View>
  );
};

export default ComponentWithLoop;
