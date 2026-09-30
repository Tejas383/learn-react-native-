import { Button, Text, View } from 'react-native';

const Login = props => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Login Page</Text>
      <Button
        title="go to home page"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default Login;
