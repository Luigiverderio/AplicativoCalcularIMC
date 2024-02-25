import React from 'react';
import {View , Text, Image } from "react-native";
import styles from "./style"
import logoSesi from  "../../components/img/logosesi.jpg"

export default function Title(){
  return(
    <View style={styles.boxTitle}>
       <Image source={logoSesi} alt="LogodoSESI" style={styles.logo}/>
      <Text style={styles.textTitle}>APP IMC SESI MONTE ALTO</Text>
    </View>
  );
}