import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DynamicGrid = () => {
  const users = [
    { id: 1, name: 'Alka' },
    { id: 2, name: 'Babita' },
    { id: 3, name: 'Kajol' },
    { id: 4, name: 'Priya' },
    { id: 5, name: 'Rahul' },
    { id: 6, name: 'Aman' },
    { id: 7, name: 'Neha' },
    { id: 8, name: 'Rohit' },
    { id: 9, name: 'Simran' },
    { id: 10, name: 'Arjun' },
  ];

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Static Grid</Text>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    height: 100,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
export default DynamicGrid;
