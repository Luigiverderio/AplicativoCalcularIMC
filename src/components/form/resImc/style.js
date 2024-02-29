import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    paddingTop: 30,
    borderRadius: 50,
    alignItems: 'center',
    width: '100%',
    color:'red'
  },
  numberImc: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF0043',
  },
  information: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0043',
  },
  shareButton:{
    alignItem:"center",
    marginBottom:10
  },
  share:{
    backgroundColor:"#1877f2",
    borderRadius:50,
    paddingBottom:5,
    paddingTop:5,
  },
  sharedText:{
    color:"white",
    fontWeight:"bold",
    paddingHorizontal:30,
  }
});

export default styles