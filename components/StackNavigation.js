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
            title: 'USER LOGIN',
            headerStyle: {
              backgroundColor: 'magenta',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
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
