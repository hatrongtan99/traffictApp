import {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AuthContext} from '../context/AuthProvider';
import Splash from './Splash';
import Login from './auth/Login';
import CreateAccount from './auth/CreateAccount';

import Map from './stack/Map';
import DetailTime from './stack/DetailTime';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const {auth} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {auth && auth.token ? (
        <Stack.Navigator
          initialRouteName="Map"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Detail-time" component={DetailTime} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Create-account" component={CreateAccount} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
