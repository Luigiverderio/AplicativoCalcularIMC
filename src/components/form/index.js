import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Vibration,
  Keyboard,
  Pressable
} from 'react-native';
import ResultImc from './resImc';
import styles from './style'
export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [msgImc, setMsgImc] = useState('Preencha com peso e altura!');
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')
  const [errorMesage, seterrorMessage] = useState(null)
  function calcular() {
    return setImc((peso / (altura * altura)).toFixed(2)) //Aqui criei uma função que irá setar o Imc da pessoa de acordo com os valores recebidos
  }

  function verificarImc() {
    if (imc == null) {
      Vibration.vibrate();
      seterrorMessage("Campo obrigatório*")
    }
  }

  function validarimc() {
    if (peso != null && altura != null) {
      calcular()
      setAltura(null)
      setPeso(null)
      setMsgImc('Seu IMC é:')
      setTextButton('Calcular novamente')
      seterrorMessage(null)
      Keyboard.dismiss()
      return
    }

    verificarImc()
    setImc(null)
    setTextButton('Calcular')
    setMsgImc('Preencha com o peso e altura')
  }

  return (
    <Pressable>
      <View style={styles.formContext}>
        <View style={styles.form}>
          <Text style={styles.formLabel}>
            Altura
          </Text>
          <Text style={styles.errorMessage}>{errorMesage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAltura}
            value={altura}
            placeholder="Ex: 1.75"
            keyboardType="numeric">
          </TextInput>
          <Text style={styles.formLabel}>
            Peso
          </Text>
          <Text style={styles.errorMessage}>{errorMesage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPeso}
            value={peso}
            placeholder="Ex: 65"
            keyboardType="numeric">
          </TextInput>
          <TouchableOpacity
            style={styles.buttonCalcular}
            onPress={() => { validarimc() }}>
            <Text style={styles.textButton}>{textButton}</Text>
          </TouchableOpacity>
        </View>
        <ResultImc style={styles.textButton} txtRes={msgImc} resultImc={imc}></ResultImc>
      </View>
    </Pressable>
  );
}