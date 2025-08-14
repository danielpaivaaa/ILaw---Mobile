import React from 'react';

//importa a função para criar um stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//importa as tealas que farão parte da navegação
import SplashScreen from '../screens/begin/SplashScreen'
import WelcomeScreen from '../screens/begin/WelcomeScreen'
import LoginLawyerScreen from '../screens/login/LoginLawyerScreen';
import LoginClientScreen from '../screens/login/LoginClientScreen';
import RegisterLawyer from '../screens/register/RegisterLawyer';
import RegisterTwoLawyer from '../screens/register/RegisterTwoLawyer';
import RegisterClient from '../screens/register/RegisterClient';
import HomePrincipal from '../tabs/Home';
import TabNavigator from '../components/TabNavigator';

//define o tipo das rotas e os parametros esperados
export type RootStackParamList = {
    Tabs: undefined;
    Splash:undefined;
    Welcome:undefined;
    LoginLawyer:undefined;
    LoginClient:undefined;
    RegisterLawyer: undefined;
    RegisterTwoLawyer: undefined;
    HomePrincipal: undefined;
    RegisterClient: undefined;
};

//cria o stack navigator com base no tipo das rotas que defini
const Stack = createNativeStackNavigator<RootStackParamList>();

//componente que exporta a pilha de navegação
export default function StackNavigator() {
    return(
        //define a estrutura de navegação da aplicação

        <Stack.Navigator
        initialRouteName="Splash" //primeira tela ao abrir o app
        screenOptions={{headerShown: false}}// oculta o cabeçalho padrão
        >
         {/* Tela de Splash */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/* Tela de welcome */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
         <Stack.Screen name="LoginLawyer" component={LoginLawyerScreen} options={{ title: 'Login Advogado' }} />
        <Stack.Screen name="LoginClient" component={LoginClientScreen} options={{ title: 'Login Cliente' }} />
        <Stack.Screen name="RegisterLawyer" component={RegisterLawyer} options={{ title: 'Registro Advogado' }} />
        <Stack.Screen name="RegisterTwoLawyer" component={RegisterTwoLawyer} options={{ title: 'Registro Advogado Segundo'  }} />
        <Stack.Screen name="RegisterClient" component={RegisterClient} options={{ title: 'Registro Cliente'  }} />
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ title: 'tab de navegação'  }} />
        </Stack.Navigator>
    );
}