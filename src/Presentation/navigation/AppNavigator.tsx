import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../screens/Login/RegisterScreen';
import HomeScreen from '../screens/Variado/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import PerfilScreen from '../screens/Variado/PerfilScreen';

export type RootStackParams = {
  Login: undefined;
  Register: undefined;
  Home: {id: string};
  Perfil: {id: string};
};

const Stack = createStackNavigator<RootStackParams>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Registro'}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, // No muestra encabezado
          gestureEnabled: false, // Deshabilita gestos de retroceso
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{title: 'Perfil del Usuario'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
