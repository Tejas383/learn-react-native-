import { FlatList, Text, View } from 'react-native';

const ListWithFlatList = () => {
  const users = [
    { id: 1, name: 'Alka' },
    { id: 2, name: 'Babita' },
    { id: 3, name: 'Kajol' },
    { id: 4, name: 'Bhoomi' },
  ];
  return (
    <View>
      <Text style={{ fontSize: 40 }}>List With FlatList</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20 }}>{item.name}</Text>
        )}
        // FlatList is a scrollable component, and I am trying to nest that into ScrollView (app.js), which won't be possible,
        // react-native warns about nesting two components , if they have the same scroll direction.
        // therefore
        scrollEnabled={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListWithFlatList;
