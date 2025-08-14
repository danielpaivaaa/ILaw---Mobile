import React from "react";
import { View, TextInput, TouchableOpacity} from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { styles } from '../../styles/LoginClientScreen.styles';
import AppText from '../../components/AppText';
import { ArrowLeft } from "phosphor-react-native";
import { RootStackParamList } from "../../navigation/StackNavigator";



type LoginClientScrenNavigationprop = NativeStackNavigationProp<RootStackParamList, 'LoginClient'>;

export default function LoginClient(){

  const navigation = useNavigation<LoginClientScrenNavigationprop>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color="#012060" />
      </TouchableOpacity>

      <AppText style={styles.title}>Cliente</AppText>
      <AppText style={styles.subtitle}>Efetue seu login</AppText>

      <TextInput 
      style={styles.input}
      placeholder="E-mail ou usuário"
      placeholderTextColor="#999"
      />
      <TextInput 
      style={styles.input}
      placeholder="Senha"
      secureTextEntry
      placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.loginButton}>
        <AppText style={styles.loginButtonText}>Acessar</AppText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterClient')}>
        <AppText style={styles.registerText}>Não possui conta? Cadastre-se</AppText>
      </TouchableOpacity>

    </View>
  );
};


