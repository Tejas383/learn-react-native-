import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

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
            headerLeft: rightButton,
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

const rightButton = () => {
  return (
    <Button
      title="left"
      onPress={() => {
        console.warn('left button clicked');
      }}
    />
  );
};

const Home = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Home Page</Text>
    </View>
  );
};

const Login = props => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Login Page</Text>
      <Button
        title="go to home page"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default StackNavigation;
