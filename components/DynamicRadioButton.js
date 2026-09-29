import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DynamicRadioButton = () => {
  const [selected, setSelected] = useState(1);

  const subjects = [
    { id: 1, subject: 'Mathematics' },
    { id: 2, subject: 'Computer Science' },
    { id: 3, subject: 'Physics' },
    { id: 4, subject: 'Chemistry' },
    { id: 5, subject: 'English' },
  ];

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Dynamic Radio Button</Text>

      <View style={styles.main}>
        {subjects.map((item, index) => (
          <TouchableOpacity onPress={() => setSelected(item.id)}>
            <View style={styles.radioBox}>
              <View style={styles.radioButton}>
                {selected === item.id ? (
                  <View style={styles.radioSelected} />
                ) : null}
              </View>
              <Text style={styles.radioText}>{item.subject}</Text>
            </View>
          </TouchableOpacity>
        ))}
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

export default DynamicRadioButton;
