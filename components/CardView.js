import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
  StatusBar,
} from "react-native";import React, { Component } from 'react'
import { FlatList } from "react-native";

const imagenes = [
  'https://static.zara.net/photos///2023/V/0/1/p/7901/532/800/2/w/563/7901532800_2_3_1.jpg?ts=1673977941779',
  'https://static.zara.net/photos///2023/V/0/1/p/7901/532/800/2/w/563/7901532800_2_4_1.jpg?ts=1673977927283',
  'https://static.zara.net/photos///2023/V/0/1/p/7901/532/800/2/w/563/7901532800_2_5_1.jpg?ts=1673977924151',
  'https://static.zara.net/photos///2023/V/0/1/p/7901/532/800/2/w/850/7901532800_1_1_1.jpg?ts=1673977931421',
  'https://static.zara.net/photos///2023/V/0/1/p/7901/532/800/2/w/850/7901532800_2_1_1.jpg?ts=1673977934901',
  'https://static.zara.net/photos///2023/V/0/1/p/7901/532/800/2/w/850/7901532800_2_2_1.jpg?ts=1673977928601'
]

const width = Dimensions.get("window").width;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) /2;
const height = Dimensions.get("window").height;


const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function BackDrop({ scrollX}) {
  return <View style={[{ height: ALTURA_BACKDROP, width,position: 'absolute',top: 0},StyleSheet.absoluteFillObject,]}>

{
  imagenes.map ((imagen, index) => {

    const inputRange = [
      (index - 1) * ANCHO_CONTENEDOR,
      index * ANCHO_CONTENEDOR,
      (index + 1) * ANCHO_CONTENEDOR,
    ];

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });
    return <Animated.Image source={{uri:imagen}} key={index} style={[{ height: ALTURA_BACKDROP, width,position: 'absolute',top: 0, opacity}]}/>
  })
}

  </View>
}
export default function CardView() {
   
  const scrollX = React.useRef(new Animated.Value(0)).current;
 
    return (
      <SafeAreaView style={styles.container}>

        <BackDrop scrollX={scrollX}/>
       <Animated.FlatList
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
       data={imagenes}
       horizontal = {true}
       showsHorizontalScrollIndicator = {false}
       contentContainerStyle={{
        paddingTop: 30,
        paddingHorizontal: ESPACIO_CONTENEDOR,       
      }}
        decelerationRate={0}
        snapToInterval={ANCHO_CONTENEDOR}
        scrollEventThrottle={16}
       keyExtractor={(item) => item}
       renderItem={({item,index}) => {
       
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR,
        ];

        const outputRange = [0, -50, 0];
        
        const translateY = scrollX.interpolate({
          inputRange,
          outputRange
        });
        
        return (   
          <View style={{width:ANCHO_CONTENEDOR}}>

          <Animated.View style={{
            marginHorizontal: ESPACIO,
            padding: ESPACIO,
            borderRadius: 24,
            transform: [{ translateY }],

          }}>
              <Image source={{uri: item}} style={styles.posterImage}/>
          </Animated.View>

          </View>
        )
       }}
       />
       </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginTop: 30,

    padding: 10,
    zIndex: 2
  }
})