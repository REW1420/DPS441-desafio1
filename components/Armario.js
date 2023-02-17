import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native';
import {ListItem,Avatar} from 'react-native-elements'

export default function Armario(){
  
const Armario = [
  {
    title: 'ZW FALDA LARGA DENIM',
    price: '65,95 USD',
    cover: 'https://static.zara.net/photos///2023/V/0/1/p/2553/050/428/2/w/294/2553050428_1_1_1.jpg?ts=1676306153783'
  },
  {
    title: 'BLAZER CRUZADA',
    price: '79,95 USD',
    cover: 'https://static.zara.net/photos///2023/V/0/1/p/2420/761/712/2/w/294/2420761712_2_3_1.jpg?ts=1676557563792'
  },
  {
    title: 'PANTALÓN RECTO',
    price: '49,95 USD',
    cover: 'https://static.zara.net/photos///2023/V/0/1/p/2418/761/712/2/w/294/2418761712_2_6_1.jpg?ts=1676557562226'
  },
  {
    title: 'ZAPATO PLANO DESTALONADO ADORNO',
    price: '59,95 USD',
    cover: 'https://static.zara.net/photos///2023/V/1/1/p/2503/110/001/2/w/563/2503110001_2_2_1.jpg?ts=1676374650556'
  },
  {
    title: 'ZW FALDA LARGA DENIM',
    price: '65,95 USD',
    cover: 'https://static.zara.net/photos///2023/V/0/1/p/2553/050/428/2/w/294/2553050428_1_1_1.jpg?ts=1676306153783'
  }
]
return(
  Armario.map( (prenda,i)=>{
   
        return(
            <View style={Styles.container}>
            <ListItem key={i} bottomDivider >
            <Avatar source={{uri:prenda.cover}}/>
            <ListItem.Content>
            <ListItem.Title style={Styles.text}>{prenda.title}</ListItem.Title>
            <ListItem.Subtitle>{prenda.price}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron/>
            </ListItem>
            </View>

            
          )
   
   
  }
  )
)
}

const Styles = StyleSheet.create({
    container:{
      paddingTop: 0,
        padding:5,
        shadowColor: "#000",
    },
   
})