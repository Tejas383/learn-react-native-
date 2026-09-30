import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

const DialogBox = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Modal</Text>

      <Modal transparent={false} visible={show} animationType="slide">
        <View style={styles.main}>
          <View style={styles.box}>
            <Text style={styles.text}>Hello, I am a MODAL</Text>
            <Button
              title="close modal"
              color="green"
              onPress={() => setShow(false)}
            />
          </View>
        </View>
      </Modal>

      <Button title="show modal" onPress={() => setShow(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    margin: 50,
  },
  box: {
    backgroundColor: 'red',
    borderRadius: 20,
  },
  text: {
    padding: 20,
    textAlign: 'center',
    color: 'yellow',
    fontWeight: '600',
    fontSize: 20,
  },
});

export default DialogBox;
