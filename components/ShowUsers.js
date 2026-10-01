import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ShowUsers = ({ data }) => {
  console.warn(data);

  return (
    <View style={styles.main}>
      <Text style={styles.header}>User Details</Text>
      <View style={styles.container}>
        {data.length &&
          data.map(item => (
            <View style={styles.usersList}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>{item.age}</Text>
              <Text style={styles.text}>{item.email}</Text>
              <Button title="delete" color={'red'} />
              <Button title="update" color={'green'} />
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
  header: {
    fontSize: 30,
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  usersList: {
    backgroundColor: 'orange',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 5,
    padding: 3,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default ShowUsers;
