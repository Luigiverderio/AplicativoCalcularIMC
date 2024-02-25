import React from "react";
import {View, Text} from 'react-native';

export default function ResultImc(props){
  return(
    <View>
      <Text>{props.messageResultImc}</Text>
      <Text>{props.resultImc}</Text>
    </View>
  );
} /*Props é um argumento para passar dados de um componente para outro*/