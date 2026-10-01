import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SearchUser = ({ setData }) => {
  const [selected, setSelected] = useState(1);
  const [text, setText] = useState('');

  const searchUsing = [
    { id: 1, search: 'Name' },
    { id: 2, search: 'Age' },
    { id: 3, search: 'Email' },
  ];

  const applySearch = async () => {
    let filtertype =
      selected === 1
        ? 'name'
        : selected === 2
        ? 'age'
        : selected === 3
        ? 'email'
        : '';

    let result = await fetch(
      `http://10.0.2.2:3000/users?${filtertype}=${text}`,
    );

    result = await result.json();
    setData(result);
  };

  return (
    <View style={{}}>
      <Text>Search Using: </Text>

      <View style={styles.main}>
        {searchUsing.map((item, index) => (
          <TouchableOpacity onPress={() => setSelected(item.id)}>
            <View style={styles.radioBox}>
              <View style={styles.radioButton}>
                {selected === item.id ? (
                  <View style={styles.radioSelected} />
                ) : null}
              </View>
              <Text style={styles.radioText}>{item.search}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        placeholder="search"
        onChangeText={t => setText(t)}
        value={text}
      />

      <Button title="search" onPress={applySearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  radioBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
  },
  radioText: {
    fontSize: 13,
  },
  radioSelected: {
    height: 10,
    width: 10,
    borderRadius: 15,
    backgroundColor: 'black',
    margin: 3,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
  },
});

export default SearchUser;
