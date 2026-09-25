import { View, Text } from 'react-native';

const User = props => {
  return (
    <View>
      <Text>Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
    </View>
  );
};

export default User;
