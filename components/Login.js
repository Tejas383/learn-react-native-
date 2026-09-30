import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const Login = props => {
  // const name = 'Tejasvita';
  const [name, setName] = useState('');

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Login Page</Text>
      <TextInput
        style={{
          borderColor: 'black',
          borderRadius: 5,
          borderWidth: 1,
        }}
        onChangeText={text => setName(text)}
      />
      <Button
        title="go to home page"
        onPress={() => props.navigation.navigate('Home', { name })}
      />
    </View>
  );
};

export default Login;
