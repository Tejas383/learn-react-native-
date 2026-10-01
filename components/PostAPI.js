import React from 'react';
import { Button, Text, View } from 'react-native';

const PostAPI = () => {
  const data = {
    name: 'Tejasvita',
    email: 'tejasvita@example.com',
    age: 20,
  };

  const saveAPIData = async () => {
    let result = await fetch('http://10.0.2.2:3000/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });

    result = await result.json();
    console.warn(result);
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Send data to API</Text>
      <Button title="add data" onPress={saveAPIData} />
    </View>
  );
};

export default PostAPI;
