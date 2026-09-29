import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RadioButton = () => {
  const [selected, setSelected] = useState(2);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Static Radio Button</Text>

      <View style={styles.main}>
        <TouchableOpacity onPress={() => setSelected(1)}>
          <View style={styles.radioBox}>
            <View style={styles.radioButton}>
              {selected === 1 ? <View style={styles.radioSelected} /> : null}
            </View>
            <Text style={styles.radioText}>Radio 1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelected(2)}>
          <View style={styles.radioBox}>
            <View style={styles.radioButton}>
              {selected === 2 ? <View style={styles.radioSelected} /> : null}
            </View>
            <Text style={styles.radioText}>Radio 2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radioBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  radioButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
  },
  radioText: {
    fontSize: 20,
  },
  radioSelected: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: 'black',
    margin: 3,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default RadioButton;
