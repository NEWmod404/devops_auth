import React, {useState} from 'react';
import {View, TextInput, Text, Alert} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Icon from '@react-native-vector-icons/fontawesome6';
import {globalStyles} from '../../theme/GlobalStyles';
import {RootStackParams} from '../../navigation/AppNavigator';
import {
  getIdBynameUseCase,
  LoginUseCase,
} from '../../../Domain/useCases/LoginUseCase';
import {ButtonComponent} from '../../components/Mybutton';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [username, setUsername] = useState('');
  const [contra, setContra] = useState('');

  const hacerLogin = () => {
    if (LoginUseCase(username, contra)) {
      const id = getIdBynameUseCase(username, contra);
      navigation.reset({index: 0, routes: [{name: 'Home', params: {id}}]});
      //navigation.navigate('Home', {id}) };
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.inputContainer}>
        <Icon name="user" size={20} color="#A569BD" style={globalStyles.icon} />
        <TextInput
          style={globalStyles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={globalStyles.inputContainer}>
        <Icon
          name="lock"
          size={20}
          color="#A569BD"
          iconStyle="solid"
          style={globalStyles.icon}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={contra}
          onChangeText={setContra}
        />
      </View>
      <ButtonComponent onAction={hacerLogin} label="Iniciar Sesión" />
      <Text style={globalStyles.textCenter}>
        ¿No tienes cuenta?{' '}
        <Text
          style={globalStyles.link}
          onPress={() => navigation.navigate('Register')}>
          Regístrate
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
