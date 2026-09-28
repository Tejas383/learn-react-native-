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

// we can also use map function as in react, but, it is better to use flat list, because ,
// 1. it provides a number of functionalities (like header and footer)
// 2. map loads the complete list, and might hang when the length of the list increases. flatlist removes the extra elements from the ui. it allows lazy loading
