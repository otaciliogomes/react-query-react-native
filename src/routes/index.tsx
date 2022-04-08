import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../screens/Home';
import NewPost from '../screens/NewPost'
import Sign from '../screens/Sign';
export type RootStackParamList = {
  NewPost: undefined
  Home: undefined
  Sign: undefined
};
const Routes = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
      <Stack.Navigator initialRouteName="Sign" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Sign"  component={Sign} />
        <Stack.Screen name="Home"  component={Home} />
        <Stack.Screen name="NewPost" component={NewPost} />
      </Stack.Navigator>
  );
};

export default Routes;
