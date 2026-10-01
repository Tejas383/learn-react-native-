import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const APIForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const saveData = async () => {
    let result = await fetch('http://10.0.2.2:3000/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name, age, email }),
    });

    result = await result.json();
    console.warn(result);

    clearDetails();
  };

  const clearDetails = () => {
    setName('');
    setAge('');
    setEmail('');
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>send data to api using form</Text>

      <TextInput
        placeholder="enter name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="enter age"
        onChangeText={text => setAge(text)}
        value={age}
      />
      <TextInput
        placeholder="enter email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Button title="add data" onPress={saveData} />
    </View>
  );
};

export default APIForm;
