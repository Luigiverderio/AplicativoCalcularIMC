import { StatusBar } from 'expo-status-bar'; //Aqui estamos importando a barra status do celular.
import {
   StyleSheet, 
   Text, 
   View 
  } from 'react-native'; //Aqui estamos importando as funções do react-native

  import React from "react";
  import Title from './src/components/h1'; //Importando os componentes do meu app
  import Main from './src/components/main';



export default function App() { //Aqui definimos a função App com uma área visível.

  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
