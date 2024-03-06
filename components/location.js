import React, { useState, useEffect, useRef } from "react";
import { Text, View,StyleSheet, Modal, ScrollView, FlatList, Image, SectionList, Pressable, Button, TouchableHighlight, TouchableOpacity, ActivityIndicator, StatusBar, Platform, TextInput } from "react-native";


export const Location = (props) => {
    // console.log("Location props:", props);
    if (props.location && props.country) {
        return (
            <View>
                <Text style={{ color: "white", fontSize:27,marginBottom:15,marginTop:20 }}>📍 {props.location},{props.country}</Text>
                {/* <Text style={{ color: "black" }}>Longitude: {props.longitude}</Text> */}
            </View>
        );
    } else {
        return null; // Render nothing if props.location or props.country are undefined
    }
}
