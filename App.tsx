

import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Modal, ScrollView, FlatList, Image, SectionList, Pressable, Button, TouchableHighlight, TouchableOpacity, ActivityIndicator, StatusBar, Platform, TextInput, ImageBackground } from "react-native";
// import { UserData } from "./components/UserData";
// import { WebView } from "react-native-webview"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import { Light } from "./components/light";
// import { Johan } from "./components/johan";
// import { Lelouch } from "./components/lelouch";
// import { Ayanokoji } from "./components/ayanokoji";
// import { Home } from "./components/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import { Login } from "./components/Login"
import { List } from "./components/List"
import { Search } from "./components/Search";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from "./components/Header";
import Product from "./components/Product";
import { Location } from "./components/location";
import { Temperature } from "./components/temperature";
import { Condition } from "./components/condition";
import { Aqi } from "./components/aqi";
import { Humidity } from "./components/humidity";
import { Wind } from "./components/wind";
import { Main } from "./components/main";
import { History } from "./components/history";

const Tab = createBottomTabNavigator();
const App = () => {

    const [city, setCity] = useState('')
    const [data, setData] = useState({});


    const search = async () => {

        try {

            const API_KEY = ' 0149d0341439441eb99171734240103';

            // weatherapi
            const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`

            //openweathermap
            // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`

            let result = await fetch(url)
            result = await result.json();
            setData(result);
            // console.warn(result);
        } catch (error) {
            console.error("error fetching data:", error)
        }

    }

    useEffect(() => {
        search();
    }, []);


    return (

        <ImageBackground source={require('./components/img/default-background.jpeg')} style={styles.backgroundImage}>
            <View>
                <Text style={{ color: "white", fontSize: 54, marginLeft: 70, marginTop: 10, fontStyle: "italic" }}>Vātāvaraṇa</Text>
                <TextInput style={{ borderColor: "white", borderWidth: 2, borderRadius: 15, color: "black", marginBottom: 20, backgroundColor: "white" }}
                    placeholder="Enter city"
                    onChangeText={(text) => setCity(text)} />

                    <View style={{ marginLeft:160, width: 80, justifyContent: "center", alignItems: "center" }}>
                        <Button title="search" color={"#0CAFFF"} onPress={search} />
                    </View>

            </View>

            <View >
                {data.current && (
                    <View style={{ justifyContent: "center", alignItems: "center" }}>


                        {/* <Text style={{ color: "white", fontSize:27 }}>{data.location?.name},{data.location?.country}</Text> */}
                        <Location location={data.location?.name} country={data.location?.country} />


                        {/* <Text style={{ color: "white",fontSize:70 }}>{data.current?.temp_c}°C</Text> */}

                        <Temperature temperature={data.current?.temp_c} />

                        {/* <Text style={{ color: "white",fontSize:27}}> {data.current?.condition?.text}</Text> */}
                        <Condition condition={data.current?.condition?.text} />


                        {/* <Text style={{ color: "white",fontSize:27 }}>{data.current?.air_quality.pm2_5}</Text> */}
                        <Aqi aqi={data.current?.air_quality.pm2_5} />

                        {/* <Text style={{ color: "white" ,fontSize:27}}>{data.current?.wind_kph} km/h</Text> */}
                        <Wind wind={data.current?.wind_kph} />


                        {/* <Text style={{ color: "white",fontSize:27 }}>{data.current?.humidity}%</Text> */}
                        <Humidity humidity={data.current?.humidity} />
                    </View>
                )}
            </View>

        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    searchButton: {
        width: 10, // Adjust the width as needed
    },
});


export default App;