import React from 'react';
import { View, Text, TouchableOpacity, Share} from 'react-native';
import styles from './style'

export default function ResultImc(props){
  const onShare = async () => {
    const result = await Share.share ({
      message: "Meu imc é: " + props.ResultImc,
    });
  };
  return(
    <View style={styles.resultImc}>
 <View style={styles.shareButton}>
        {props.resultImc != null ? (
          <TouchableOpacity style={styles.share} onPress={onShare}>
          <Text style={styles.sharedText}>Compartilhar</Text>
          </TouchableOpacity>
          ): null}
      </View>
      <Text style={styles.information}>{props.txtRes}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
    </View>
    
    );
};

/*Props relaciona a propriedade do elemento com uma propriedade de outro elemento, no caso ele está puxando as propriedades do txtRes do elemento pai.*/