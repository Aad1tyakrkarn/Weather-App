import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Modal, ScrollView, FlatList, Image, SectionList, Pressable, Button, TouchableHighlight, TouchableOpacity, ActivityIndicator, StatusBar, Platform, TextInput } from "react-native";


export const Temperature =(props)=>{
   
    return(
        <View >
            <Text style={{ color: "white",fontSize:70,marginBottom:15,marginLeft:1,marginRight:27 }}>🌡{props.temperature}°C</Text>
        </View>
    )
  
}  


// export const Temperaturelow =(props)=>{
//     return(
//         <View style={styles.low}>
        
//             <Text style={{color:"white"}}>{props.temperature}°C</Text>

            
//         </View>
//     )
// }

const styles =StyleSheet.create({
    high:{
        backgroundColor:"yellow",
        width:100,
        height:150,
        alignItems:"center",
        justifyContent:"center"
    },
    low:{
        backgroundColor:"skyblue"
    }
})