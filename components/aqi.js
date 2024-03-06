import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Modal, ScrollView, FlatList, Image, SectionList, Pressable, Button, TouchableHighlight, TouchableOpacity, ActivityIndicator, StatusBar, Platform, TextInput } from "react-native";


export const Aqi =(props)=>{
    return(
        <View>        
            <Text style={{ color: "white",fontSize:27,marginBottom:15 }}>😷  {props.aqi}</Text>
        </View>
    )
}
