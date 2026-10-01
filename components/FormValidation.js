import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const FormValidation = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const verifyData = () => {
    setNameError(!name ? true : false);
    setAgeError(!age ? true : false);
    setEmailError(!email ? true : false);

    if (!name || !age || !email) return false;

    // clearDetails();

    console.warn('details verified');
  };

  const clearDetails = () => {
    setName('');
    setAge('');
    setEmail('');
  };

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Simple Form Validation</Text>

      <TextInput
        style={styles.textInput}
        placeholder="enter user name"
        onChangeText={text => setName(text)}
        value={name}
      />
      {nameError ? <Text>enter valid name</Text> : null}

      <TextInput
        style={styles.textInput}
        placeholder="enter user age"
        onChangeText={text => setAge(text)}
        value={age}
      />
      {ageError ? <Text>enter valid age</Text> : null}

      <TextInput
        style={styles.textInput}
        placeholder="enter user email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      {emailError ? <Text>enter valid email</Text> : null}

      <Button title="verify data" color={'red'} onPress={verifyData} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
    margin: 4,
  },
});

export default FormValidation;
