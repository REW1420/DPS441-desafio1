import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';

export default function HeaderApp() {
  return (

    <SafeAreaView style={styles.container}>

        <Text style={styles.text}>ZARA</Text>
    </SafeAreaView> 


    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afa3a1',
    borderRadius:40,
    zIndex: 1
    


  },
  text:{
    fontSize:50,
    fontWeight:'bold',
    textAlign:'left',
    padding: 20,
    top: 5,
    fontFamily: 'Didot'
  }
});
