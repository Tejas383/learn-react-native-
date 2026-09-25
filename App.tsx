import { Button, Text, View } from 'react-native';
import UserData from './components/UserData';

function App() {
  const name = 'Tejasvita';
  var age = 21;
  let email = 'tejasvita@gmail.com';

  const fruit = () => {
    return 'apple';
  };

  const press = val => {
    console.warn('button pressed: ' + val);
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello from react native</Text>
      <Button title="Press me" />
      <Button title="Press me too" />
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

      {/* if we want to pass the params */}
      <Button color={'green'} title="On Press 1" onPress={press} />
      {/* if we donot want to pass the params */}
      <Button
        color={'red'}
        title="On Press 2"
        onPress={() => press('helloooo')}
      />
    </View>
  );
}

export default App;
