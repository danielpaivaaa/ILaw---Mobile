import React from "react";
import { View, TextInput, TouchableOpacity} from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import {styles} from '../../styles/LoginLawyerScreen.styles'
import { ArrowLeft } from "phosphor-react-native";
import AppText from '../../components/AppText';
import { RootStackParamList } from "../../navigation/StackNavigator";
 


type LoginLawyerScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginLawyer'>;


export default function LoginLawyerScreen(){
  
  const navigation = useNavigation<LoginLawyerScreenNavigationProp>();

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color="#012060" />
      </TouchableOpacity>

      <AppText style={styles.title}>Advogado</AppText>
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

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Tabs')}>
        <AppText style={styles.loginButtonText}>Acessar</AppText>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RegisterLawyer')}>
        <AppText style={styles.registerText}>Não possui conta? Cadastre-se</AppText>
      </TouchableOpacity>
    </View>
  );
};

