import { Button, Text, View } from 'react-native';

function App() {
  const name = 'Tejasvita';
  var age = 21;
  let email = 'tejasvita@gmail.com';

  const fruit = () => {
    return 'apple';
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello from react native</Text>
      <Button title="Press me"></Button>
      <Button title="Press me too"></Button>
      <Text style={{ fontSize: 15 }}>{name}</Text>
      <Text style={{ fontSize: 15 }}>{age}</Text>
      <Text style={{ fontSize: 15 }}>{email}</Text>
      <Text style={{ fontSize: 15 }}>{fruit()}</Text>
      <Text style={{ fontSize: 15 }}>{10 * 50}</Text>
      <Text style={{ fontSize: 15 }}>
        {age > 18 ? 'adult' : 'anauthorised'}
      </Text>

      <Text style={{ fontSize: 30 }}>Components</Text>
      <UserData />
    </View>
  );
}

// we can have multiple components in a file
const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 15 }}>Name : Tejasvita</Text>
      <Text style={{ fontSize: 15 }}>Age : 21</Text>
      <Text style={{ fontSize: 15 }}>Gender : Female</Text>
    </View>
  );
};
// components can be nested

// but, it is better to keep components inside a components folder

export default App;
