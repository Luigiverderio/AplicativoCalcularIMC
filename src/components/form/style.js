import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    alignItems:'center',
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
  },
  form: {
    width:'100%',
    height:'auto',
    marginTop:30,
    padding:10,
  },
  formLabel: {
    color:'black',
    fontSize:20,
    paddingLeft:20,
  },
  input: {
    width:'90%',
    borderRadius:50,
    backgroundColor:'#f6f6f6',
    height:40,
    margin:12,
    paddingLeft:10,
  },
  buttonCalcular: {
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    backgroundColor:'#FF0043',
    paddingTop:14,
    paddingBottom:14,
    marginLeft:12,
    margin:30
  },
  textButton: {
    fontSize:20,
    color:'white' 
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold",
    paddingLeft:20,
    fontSize:12,
  }
});

export default styles