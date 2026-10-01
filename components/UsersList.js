import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ShowUsers = ({ data, getData }) => {
  const deleteUser = async id => {
    console.warn(id, ': user deleted');

    let result = await fetch(`http://10.0.2.2:3000/users/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(),
    });

    result = await result.json();

    getData();
  };

  const updateUser = () => {};

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
              <Button
                title="delete"
                color={'red'}
                onPress={() => deleteUser(item.id)}
              />
              <Button title="update" color={'green'} onPress={updateUser} />
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
