import { Button, Text, View } from 'react-native';
import UserData from './components/UserData';

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

export default App;
