import { StyleSheet, View } from 'react-native'; //Aqui estamos importando as funções do react-native
import React from "react";
import styles from "./appStyle"
import Title from './src/components/title'; //Importando os componentes do meu app
import Form from './src/components/form'

export default function App() { //Exportando a função app para o expo
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}