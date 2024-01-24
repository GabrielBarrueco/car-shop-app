import React, { useMemo } from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { welcomeStyleSheet } from "./welcome.style";
import {  NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../routes/welcome.navigator";

export type StackNavigation = NativeStackNavigationProp<StackParamList>;

const imageUrl = "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/mmjZqoceTIqArZaeBX8z";

export const Welcome = () => {
  const styles = useMemo(() => welcomeStyleSheet(), [])
  const navigation = useNavigation<StackNavigation>();

  const handleCardTap = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.welcomeText}>Define Yourself In Your Unique Way.</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleCardTap}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
