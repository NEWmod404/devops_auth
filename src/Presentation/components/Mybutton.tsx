import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../theme/GlobalStyles';

interface Props {
  onAction: () => void;
  label: string;
}

export const ButtonComponent = ({onAction, label}: Props) => {
  return (
    <TouchableOpacity onPress={() => onAction()} style={globalStyles.button}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
