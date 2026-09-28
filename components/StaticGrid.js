import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StaticGrid = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Static Grid</Text>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {/* flexwrap makes sure that the items are covered in the next line and not in the same row */}
        <Text style={styles.item}>Name</Text>
        <Text style={styles.item}>Name</Text>
        <Text style={styles.item}>Name</Text>
        <Text style={styles.item}>Name</Text>
        <Text style={styles.item}>Name</Text>
        <Text style={styles.item}>Name</Text>
        <Text style={styles.item}>Name</Text>
        <Text style={styles.item}>Name</Text>
        <Text style={styles.item}>Name</Text>
        <Text style={styles.item}>Name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    height: 100,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default StaticGrid;
