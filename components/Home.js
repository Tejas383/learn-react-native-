import { Text, View } from 'react-native';

const Home = props => {
  const name = props.route.params.name;
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Home Page</Text>
      <Text style={{ fontSize: 20 }}>{name}</Text>
    </View>
  );
};

export default Home;
