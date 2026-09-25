import { Button, Text, View } from 'react-native';
import UserData from './components/UserData';
import User from './components/User';
import { useState } from 'react';

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

  const [data, setData] = useState('name1');
  let data2 = 'name2';

  const update = () => {
    data2 = 'updatedName2';
    setData('updatedName1');
  };

  // props
  const [name1, setname1] = useState('Bruce');
  const age1 = 10;

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

      <Text>{data}</Text>
      <Text>{data2}</Text>
      <Button title="update name" onPress={update} />

      {/* props */}
      <Text style={{ fontSize: 30 }}>Props</Text>
      <User name={name1} age={age1} />
      <Button title="update name" onPress={() => setname1('peter')} />
    </View>
  );
}

export default App;
