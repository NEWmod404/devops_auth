import React, {useState} from 'react';
import {View, TextInput, Text, Alert, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/AppNavigator';
import {globalStyles} from '../../theme/GlobalStyles';
import Icon from '@react-native-vector-icons/fontawesome6';
import {User} from '../../../Domain/entities/User';
import {RegistrarUseCase} from '../../../Domain/useCases/LoginUseCase';

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [id, setid] = useState('');
  const [username, setUsername] = useState('');
  const [contra, setContra] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const registrarUser = () => {
    if (username && contra && nombre && apellido) {
      const newUser: User = {id, username, contra, nombre, apellido};
      RegistrarUseCase(newUser);
      Alert.alert('Éxito', 'Usuario registrado con éxito');
      navigation.goBack();
    } else {
      Alert.alert('Error', 'Por favor complete todos los campos');
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.inputContainer}>
        <Icon name="user" size={20} color="#A569BD" style={globalStyles.icon} />
        <TextInput
          style={globalStyles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
      </View>

      <View style={globalStyles.inputContainer}>
        <Icon name="user" size={20} color="#A569BD" style={globalStyles.icon} />
        <TextInput
          style={globalStyles.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
      </View>

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

      <TouchableOpacity style={globalStyles.button} onPress={registrarUser}>
        <Text style={globalStyles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
