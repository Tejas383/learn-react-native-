import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

const API = () => {
  const [data1, setData1] = useState('');

  const getAPIData1 = async () => {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    result = await result.json();
    setData1(result);
  };

  useEffect(() => {
    getAPIData1();
  }, []);

  const [data2, setData2] = useState('');

  const getAPIData2 = async () => {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts');
    result = await result.json();
    setData2(result);
  };

  useEffect(() => {
    getAPIData2();
  }, []);

  return (
    <ScrollView>
      <Text style={{ fontSize: 40 }}>API</Text>
      <View>
        <Text style={{ fontSize: 20 }}>Data1</Text>
        <Text>{data1.userId}</Text>
        <Text>{data1.id}</Text>
        <Text>{data1.title}</Text>
        <Text>{data1.body}</Text>
      </View>

      <View>
        <Text style={{ fontSize: 20 }}>Data2</Text>
        {data2.map(item => (
          <View>
            <Text style={{ backgroundColor: 'blue', color: 'white' }}>
              {item.id}
            </Text>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        ))}
      </View>

      <FlatList
        data={data2}
        scrollEnabled={true}
        renderItem={({ item }) => (
          <View>
            <Text style={{ backgroundColor: 'red', color: 'white' }}>
              {item.id}
            </Text>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default API;
