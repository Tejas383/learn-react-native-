import {
  Button,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import { useState } from 'react';
import UserData from './components/UserData';
import User from './components/User';
import Form from './components/Form';
import ListWithFlatList from './components/ListWithFlatList';
import StaticGrid from './components/StaticGrid';
import DynamicGrid from './components/DynamicGrid';
import ComponentWithLoop from './components/ComponentWithLoop';
import ListWithSectionList from './components/ListWithSectionList';
import UseEffectHook from './components/UseEffectHook';
import ShowHideComponent from './components/ShowHideComponent';
import ResponsiveUIusingFlex from './components/ResponsiveUIusingFlex';
import StyleWithButton from './components/StyleWithButton';
import StaticRadioButton from './components/StaticRadioButton';
import DynamicRadioButton from './components/DynamicRadioButton';
import LoadingState from './components/LoadingState';
import DialogBox from './components/DialogBox';
import PressableButton from './components/PressableButton';
import ChangeStatusBar from './components/ChangeStatusBar';
import PlatformDetails from './components/PlatformDetails';
import Packages from './components/Packages';
import CustomModal from './components/CustomModal';
import StackNavigation from './components/StackNavigation';
import TabNavigation from './components/TabNavigation';
import API from './components/API';
import exStyles from './style';

function App() {
  const name = 'Tejasvita';
  var age = 21;
  let email = 'tejasvita@gmail.com';

  const fruit = () => {
    return 'apple';
  };

  const press = val => {
    console.warn('button pressed: ' + val);
  };

  const [data, setData] = useState('name1');
  let data2 = 'name2';

  const update = () => {
    data2 = 'updatedName2';
    setData('updatedName1');
  };

  // props
  const [name1, setname1] = useState('Bruce');
  const age1 = 10;

  const [inputName, setInputName] = useState('');

  // return (
  //   <View>
  //     <ScrollView style={{ marginBottom: 80 }}>
  //       <Text style={{ fontSize: 30 }}>Hello from react native</Text>
  //       <Button title="Press me" />
  //       <Button title="Press me too" />
  //       <Text style={{ fontSize: 15 }}>{name}</Text>
  //       <Text style={{ fontSize: 15 }}>{age}</Text>
  //       <Text style={{ fontSize: 15 }}>{email}</Text>
  //       <Text style={{ fontSize: 15 }}>{fruit()}</Text>
  //       <Text style={{ fontSize: 15 }}>{10 * 50}</Text>
  //       <Text style={{ fontSize: 15 }}>
  //         {age > 18 ? 'adult' : 'anauthorised'}
  //       </Text>

  //       <Text style={{ fontSize: 30 }}>Components</Text>
  //       <UserData />

  //       {/* if we want to pass the params */}
  //       <Button color={'green'} title="On Press 1" onPress={press} />
  //       {/* if we donot want to pass the params */}
  //       <Button
  //         color={'red'}
  //         title="On Press 2"
  //         onPress={() => press('helloooo')}
  //       />

  //       <Text>{data}</Text>
  //       <Text>{data2}</Text>
  //       <Button title="update name" onPress={update} />

  //       {/* props */}
  //       <Text style={{ fontSize: 30 }}>Props</Text>
  //       <User name={name1} age={age1} />
  //       <Button title="update name" onPress={() => setname1('peter')} />

  //       {/* inline style */}
  //       <Text style={{ fontSize: 30, color: 'red', backgroundColor: 'green' }}>
  //         Styles in react-native
  //       </Text>
  //       {/* external style */}
  //       <Text style={exStyles.textBox}>Styles in react-native</Text>
  //       {/* multiple styles */}
  //       <Text
  //         style={[
  //           exStyles.textBox,
  //           inStyles.textBox,
  //           { backgroundColor: 'black' },
  //         ]}
  //       >
  //         Styles in react-native
  //       </Text>
  //       {/* internal style */}
  //       <Text style={inStyles.textBox}>Styles in react-native</Text>
  //       <Text style={inStyles.textBox}>Styles in react-native</Text>

  //       {/* handling text input */}
  //       <Text style={{ fontSize: 40 }}>Handle Text Input</Text>
  //       <Text>Entered name is : {inputName}</Text>
  //       <TextInput
  //         placeholder="enter your name"
  //         style={{
  //           borderRadius: 5,
  //           borderColor: 'black',
  //           borderWidth: 2,
  //           padding: 5,
  //           margin: 5,
  //         }}
  //         value={inputName}
  //         onChangeText={text => setInputName(text)}
  //       />
  //       <Button title="clear text input" onPress={() => setInputName('')} />

  //       <Form />

  //       <ListWithFlatList />

  //       <StaticGrid />
  //       <DynamicGrid />

  //       <ComponentWithLoop />

  //       <ListWithSectionList />

  //       <UseEffectHook />
  //       <ShowHideComponent />

  //       <ResponsiveUIusingFlex />

  //       <StyleWithButton />
  //       <Text style={{ fontSize: 40 }}>Static Radio Button</Text>
  //       <StaticRadioButton />
  //       <DynamicRadioButton />

  //       <LoadingState />
  //       <DialogBox />
  //       <PressableButton />
  //       <ChangeStatusBar />
  //       <PlatformDetails />
  //       <Packages />

  //       <Text style={{ fontSize: 50 }}>Navigation</Text>
  //       {/* bun add @react-navigation/native */}
  //       {/* bun add react-native-screens react-native-safe-area-context */}
  //       <StackNavigation />
  //     </ScrollView>
  //     <CustomModal />
  //   </View>
  // );

  // return <StackNavigation />;
  // return <TabNavigation />;

  return <API />;
}

// internal style
const inStyles = StyleSheet.create({
  textBox: {
    fontSize: 25,
    color: 'blue',
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    height: 100,
  },
});

export default App;
