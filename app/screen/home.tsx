import { View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/card";
import { getCarsList } from "../../service/api";
import { Car } from "../../service/api.interface";
import { ShoppingCart } from 'lucide-react-native';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";


const Home = () => {
  const [cars, setCars] = useState<Car[] | null>(null);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  
  useEffect(() => {
    getCars();
  }, [])

  const getCars = async () => {
    const response = await getCarsList();
    setCars(response)
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Discover</Text>
        </View>
        {/* ToDo */}
        {/* <TextInput 
          style={styles.input} 
          value={search} 
          placeholder="Search cars" 
          autoCapitalize="none" 
          onChangeText={(text) => setSearch(text)}
        /> */}
        <FlatList 
          data={cars} 
          numColumns={2}
          renderItem={({item}) => <Card car={item}/>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
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
  cartButton: {
    height: 20,
    width: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    paddingHorizontal: 12,
  },
});