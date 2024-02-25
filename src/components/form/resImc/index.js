import React from 'react';
import { View, Text} from 'react-native';

export default function ResultImc(props){
  return(
    <View>
      <Text>{props.txtRes}</Text>
      <Text>{props.resultImc}</Text>
    </View>
  );
}

/*Props relaciona a propriedade do elemento com uma propriedade de outro elemento, no caso ele está puxando as propriedades do txtRes do elemento pai.*/