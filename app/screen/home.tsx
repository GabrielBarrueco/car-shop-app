import { View, TextInput, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/card";
import { getCarsList } from "../../service/api";
import { Car, Cars } from "../../service/api.interface";



const Home = () => {
  const [cars, setCars] = useState<Car[] | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getCars();
  }, [])

  const getCars = async () => {
    const response = await getCarsList();
    setCars(response)
  }

  return(
    <View style={styles.container}>
        <Text style={styles.titleText}>Discover</Text>
        <TextInput 
          style={styles.input} 
          value={search} 
          placeholder="Search cars" 
          autoCapitalize="none" 
          onChangeText={(text) => setSearch(text)}
        />
        <FlatList 
          data={cars} 
          numColumns={2}
          renderItem={({item}) => <Card car={item}/>}
          showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 53,
    paddingVertical: 15,
    paddingHorizontal: 8,
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    marginTop: 8,
  },
  titleText: {
    color: "#000",
    fontFamily: "Arial",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 49, /* 153.125% */
    letterSpacing: -1.6,
  },
});