import React from 'react';
import {View, Text} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/AppNavigator';
import {globalStyles} from '../../theme/GlobalStyles';
import {ButtonComponent} from '../../components/Mybutton';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const params = useRoute<RouteProp<RootStackParams, 'Home'>>().params;

  const hacerLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titulo}>¡Bienvenido al Home!</Text>
      <ButtonComponent
        onAction={() => navigation.navigate('Perfil', {id: params.id})}
        label="Ir a su perfil"
      />
      <ButtonComponent onAction={hacerLogout} label="Cerrar sesión" />
    </View>
  );
};

export default HomeScreen;
