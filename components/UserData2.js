import { StyleSheet, Text, View } from 'react-native';

const UserData2 = props => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'red',
    margin: 2,
  },
  item: {
    fontSize: 15,
    textAlign: 'center',
    flex: 1,
    borderColor: 'orange',
    borderWidth: 1,
  },
});

export default UserData2;
