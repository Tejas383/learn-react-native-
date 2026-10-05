import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import UsersList from './UsersList';

const APIForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const [data, setData] = useState([]);

  const input = useRef();

  const saveData = async () => {
    let result = await fetch('http://10.0.2.2:3000/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name, age, email }),
    });

    result = await result.json();
    console.warn(result);

    clearDetails();
    getData();

    input.current.focus();
  };

  const getData = async () => {
    let result = await fetch('http://10.0.2.2:3000/users');

    result = await result.json();

    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const clearDetails = () => {
    setName('');
    setAge('');
    setEmail('');
  };

  return (
    <View style={styles.main}>
      <View style={styles.form}>
        <Text style={styles.header}>Send data to API using Form</Text>

        <TextInput
          placeholder="enter name"
          onChangeText={text => setName(text)}
          value={name}
          style={styles.input}
          ref={input}
        />
        <TextInput
          placeholder="enter age"
          onChangeText={text => setAge(text)}
          value={age}
          style={styles.input}
        />
        <TextInput
          placeholder="enter email"
          onChangeText={text => setEmail(text)}
          value={email}
          style={styles.input}
        />
        <Button title="add data" onPress={saveData} />
      </View>

      <UsersList data={data} getData={getData} setData={setData} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
  form: {
    gap: 5,
    padding: 10,
    margin: 10,
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 10,
  },
  input: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'red',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default APIForm;
