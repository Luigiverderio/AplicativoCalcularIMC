import React from 'react';
import { View, Text} from 'react-native';
import styles from './style'

export default function ResultImc(props){
  return(
    <View style={styles.resultImc}>
      <Text style={styles.information}>{props.txtRes}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
    </View>
  );
}

/*Props relaciona a propriedade do elemento com uma propriedade de outro elemento, no caso ele está puxando as propriedades do txtRes do elemento pai.*/