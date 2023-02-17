import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import HeaderApp from './components/HeaderApp';
import Armario from './components/Armario';
import CardView from './components/CardView';

export default function App() {
  return (
    <SafeAreaView >
    <ScrollView style={styles.scrollstyle}>
    <HeaderApp/>
    <CardView/>
    <Armario/>
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  scrollstyle:{
    backgroundColor: '#f9f7f7',
  }
});
