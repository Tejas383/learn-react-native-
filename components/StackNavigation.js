import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import Home from './Home';
import Login from './Login';

const Stack = createNativeStackNavigator();

const leftButton = () => {
  return (
    <Button
      title="left"
      onPress={() => {
        console.warn('left button clicked');
      }}
    />
  );
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      {/* bun add @react-navigation/native-stack */}
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'yellow',
          headerTitleStyle: {
            fontSize: 30,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerRight: () => (
              <Button
                title="right"
                onPress={() => {
                  console.warn('right button clicked');
                }}
              />
            ),
            headerLeft: leftButton,
            title: 'USER LOGIN',
            headerStyle: {
              backgroundColor: 'magenta',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
