import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CustomModal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <View style={styles.container}>
      {showModal ? (
        <View style={styles.overlay}>
          <View style={styles.dialogBox}>
            <Text style={styles.text}>Hello, I am modal text</Text>

            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      ) : null}

      <View style={styles.bottomButton}>
        <Button title="Show Custom Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    justifyContent: 'center',
    alignItems: 'center',
  },

  dialogBox: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  text: {
    fontSize: 20,
    marginBottom: 20,
  },

  bottomButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default CustomModal;
