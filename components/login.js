import React from 'react';
import { View, Text, TouchableOpacity , StyleSheet, TextInput} from 'react-native';

function Login({ navigation }) {



  const nextpage = (()=>{
     navigation.navigate('signup')

  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Login</Text>

      <TextInput placeholder="name" style={styles.input} />
      <TextInput placeholder="password" style={styles.input} />

      <TouchableOpacity style={styles.btn} onPress={nextpage}>Login</TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  btn :{
    backgroundColor:"white",
    width:70,
    padding:15,
    borderRadius:20,
    marginTop:20,
    

  },

  input:{
    backgroundColor:"white",
    height:50,
    marginTop:20,
    padding:12,
    borderRadius:20

  },

   text:{
    fontSize:34,
    marginBottom:10
  }
});
export default Login