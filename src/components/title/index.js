import React from 'react';
import {View , Text} from "react-native";
import styles from "./style"

export default function Title(){
  return(
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>APP IMC SESI MONTE ALTO</Text>
    </View>
  );
}