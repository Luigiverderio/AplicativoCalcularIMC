import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View
} from "react-native";

import ResultImc from "./result-IMC"; //Puxando a função ResultImc


export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [msgImc, setmsgImc] = useState('Preencha a altura e o peso!')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')
  function calculoImc() {
    return setImc((peso / (altura * altura)).toFixed(2))
  }
  function validarImc() {
    if (peso != null && altura != null) {
      calculoImc()
      setAltura(null)
      setPeso(null)
      setmsgImc()
      setTextButton('Calcular novamente')
      return
    }

    
    setImc(null)
    setTextButton('Calcular')
    setmsgImc('Preencha o Peso e Altura')
  }
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          value={altura}
          onChangeText={setAltura}
          placeholder='Ex:1.75'
          keyboardType='numeric'>
        </TextInput>
        <Text>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPeso}
          value={peso}
          placeholder='Ex:65'
          keyboardType='numeric'>
        </TextInput>
        <Button title={textButton} onPress={validarImc}></Button>
      </View>
      <ResultImc messageResultImc={msgImc} resultImc={imc}></ResultImc>
    </View>
  )
}