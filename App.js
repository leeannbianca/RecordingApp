import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Login  from './components/login';
import SignUp from './components/signup';
import Recording from './components/recording'




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="login" component={Login} />
       <Stack.Screen name="signup" component={SignUp} />
       <Stack.Screen name="recording" component={Recording} />

         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
