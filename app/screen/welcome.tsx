import React, { useMemo } from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Welcome = () => {
  const styles = useMemo(() => createStyleSheet(), [])
  const navigation = useNavigation();

  const handleCardTap = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={{ flex: 1 }}>
      <Image style={{ flex: 1 }} source={{ uri: "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/mmjZqoceTIqArZaeBX8z" }} />
      <Text style={styles.welcomeText}>Define Yourself In Your Unique Way.</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleCardTap}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

function createStyleSheet() {
  return StyleSheet.create({
    loginButton: {
      flex: 1,
      paddingHorizontal: 18,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      height: 50,
      backgroundColor: "#000",
      marginTop: 12,       
      position: 'absolute',                                          
      bottom: 10,                                                    
      alignSelf: "center",
      width: "90%",
      marginBottom: 24
    },
    welcomeText: {
      flex: 1,
      color: "#FFF",
      fontFamily: "Arial",
      fontSize: 62,
      fontStyle: "normal",
      fontWeight: "600",
      
      letterSpacing: -1.6,position: 'absolute',                                          
      top: 60,                                                    
      alignSelf: "center",
    },
    buttonText: {
      color: "#FFF",
      fontFamily: "Arial",
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: 49,
      letterSpacing: -1,
    },
  });
}