import React, { useState } from "react";
import { View, TouchableOpacity} from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import {styles} from '../../styles/RegisterClient.styles'
import { ArrowLeft } from "phosphor-react-native";
import AppText from '../../components/AppText';
import { RootStackParamList } from "../../navigation/StackNavigator";
import FLoatingLabelInput from "../../components/FloatingLabelInput";
 


type RegisterClientNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterClient'>;

export default function RegisterClient() {
    const navigation = useNavigation<RegisterClientNavigationProp>();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telephone, setTelephone] = useState('');
    const [city, setCity] = useState('');

    const handleRegister = () => {
        if(!name || !email || !password) {
            alert('Preencha todos os campos!');
        } else {
            navigation.navigate('HomePrincipal');
        }

        console.log('Dados Enviados', {name, email, password, telephone, city});

    }

    return (
        <View style={styles.container}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <ArrowLeft size={24} color="#012060" />
                </TouchableOpacity>

            <AppText style={styles.title}>Está em busca de Advogados?</AppText>
            <AppText style={styles.subtitle}>Crie sua conta!</AppText>

            <FLoatingLabelInput label="Nome" value={name} onChangeText={setName}/>
            <FLoatingLabelInput label="E=mail" value={email} onChangeText={setEmail} keyboardType="email-address"/>
            <FLoatingLabelInput label="Senha" value={password} onChangeText={setPassword} secureTextEntry/>
            <FLoatingLabelInput label="Telefone" value={telephone} onChangeText={setTelephone}/>
            <FLoatingLabelInput label="Cidade" value={city} onChangeText={setCity}/>
        
            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                <AppText style={styles.loginButtonText}>Enviar</AppText>
            </TouchableOpacity>
        </View>
    );
}

