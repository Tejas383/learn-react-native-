import React from 'react';
import { SectionList, Text, View } from 'react-native';

// Section list is used to render nested arrays
// we can also use flatlist, but that is more complex

const ListWithSectionList = () => {
  const menu = [
    {
      id: 1,
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      id: 2,
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      id: 3,
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      id: 4,
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <View>
      <Text style={{ fontSize: 40 }}>List With Section List</Text>
      <SectionList
        sections={menu}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{ fontSize: 15, color: 'yellow', backgroundColor: 'green' }}
          >
            {title}
          </Text>
        )}
      />
    </View>
  );
};

export default ListWithSectionList;
