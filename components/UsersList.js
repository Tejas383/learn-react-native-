import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import SearchUser from './SearchUser';

const UsersList = ({ data, getData, setData }) => {
  const deleteUser = async id => {
    let result = await fetch(`http://10.0.2.2:3000/users/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(),
    });

    result = await result.json();

    getData();
  };

  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});

  const updateUser = user => {
    setItem(user);
    setShow(true);

    console.warn(user.name, ': user updated');
  };

  const updateUserData = async id => {
    let result = await fetch(`http://10.0.2.2:3000/users/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(item),
    });

    result = await result.json();

    getData();
    setShow(false);
  };

  return (
    <View style={styles.main}>
      <Text style={styles.header}>User Details</Text>

      <SearchUser setData={setData} />

      <View style={styles.container}>
        {data.length > 0
          ? data.map(item => (
              <View style={styles.usersList}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.age}</Text>
                {/* <Text style={styles.text}>{item.email}</Text> */}
                <Button
                  title="delete"
                  color={'red'}
                  onPress={() => deleteUser(item.id)}
                />
                <Button
                  title="update"
                  color={'green'}
                  onPress={() => updateUser(item)}
                />
              </View>
            ))
          : null}

        <Modal transparent={true} visible={show} animationType="slide">
          <View style={styles.mainModal}>
            <View style={styles.boxModal}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textModal}>Name:</Text>
                <TextInput
                  style={styles.textInput}
                  value={item.name}
                  onChangeText={text => setItem({ ...item, name: text })}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textModal}>Age:</Text>
                <TextInput
                  style={styles.textInput}
                  value={item.age}
                  onChangeText={text => setItem({ ...item, age: text })}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textModal}>Email:</Text>
                <TextInput
                  style={styles.textInput}
                  value={item.email}
                  onChangeText={text => setItem({ ...item, email: text })}
                />
              </View>
              <Button
                title="update"
                color="green"
                onPress={() => updateUserData(item.id)}
              />
              <Button
                title="close"
                color="red"
                onPress={() => setShow(false)}
              />
            </View>
          </View>
        </Modal>
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

  mainModal: {
    flex: 1,
    justifyContent: 'center',
    margin: 50,
  },
  boxModal: {
    backgroundColor: 'black',
    borderRadius: 20,
  },
  textModal: {
    padding: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  textInput: {
    flex: 1,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
    marginRight: 10,
  },
});

export default UsersList;
