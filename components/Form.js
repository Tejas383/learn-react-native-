import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showDetails, setShowDetails] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const clearDetails = () => {
    setName('');
    setEmail('');
    setPassword('');

    setShowDetails(false);
  };

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Simple Form in React Native</Text>

      <TextInput
        style={styles.textInput}
        placeholder="enter user name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="enter user email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="enter user password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={hidePassword}
        value={password}
      />

      <Button
        title="show password"
        onPress={() => setHidePassword(!hidePassword)}
      />
      <Button
        title="show details"
        color={'green'}
        onPress={() => setShowDetails(true)}
      />
      <Button title="clear details" color={'red'} onPress={clearDetails} />
      <View>
        {showDetails === true ? (
          <View>
            <Text>User Name: {name}</Text>
            <Text>User Email: {email}</Text>
            <Text>User Password: {password}</Text>
          </View>
        ) : null}
      </View>
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

export default Form;
