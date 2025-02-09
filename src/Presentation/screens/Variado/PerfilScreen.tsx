import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {globalStyles} from '../../theme/GlobalStyles';
import {RootStackParams} from '../../navigation/AppNavigator';
import {getUserByIdUseCase} from '../../../Domain/useCases/LoginUseCase';

const ProfileScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Perfil'>>().params;
  const userData = getUserByIdUseCase(params.id);

  return (
    <View style={globalStyles.containerPerfil}>
      <Text style={globalStyles.tituloPerfil}>Tu Perfil</Text>
      <View style={globalStyles.card}>
        <Text style={globalStyles.label}>Usuario:</Text>
        <Text style={globalStyles.value}>{userData?.username}</Text>

        <Text style={globalStyles.label}>Nombre:</Text>
        <Text style={globalStyles.value}>{userData?.nombre}</Text>

        <Text style={globalStyles.label}>Apellido:</Text>
        <Text style={globalStyles.value}>{userData?.apellido}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
