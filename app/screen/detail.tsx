import { StyleSheet, Text, Image, Dimensions, View, TouchableOpacity, FlatList } from "react-native";
import React, { useMemo } from "react";
import { useCartStore } from "../../store/cartStore";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Detail = ({ route }) => {
  const width = (Dimensions.get("screen").width - 32) / 2;
  const styles = useMemo(() => createStyleSheet(width), [])
  const { add: handleAddToCart } = useCartStore();
  const { car } = route.params
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.cartButton} onPress={handleGoBack}>
          <ChevronLeft color="#000" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Detail</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.FlatListContainer}>
          <FlatList horizontal
            data={car.image}
            renderItem={({ item }) => {
              return (
                <Image
                  style={styles.imageContainer}
                  source={{ uri: item.url }}
                />
              )
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{car.name}</Text>
          <View style={styles.categoryContainer}>
            <Text>{car.category}</Text>
          </View>
          <Text style={styles.subtitleText}>{car.description}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.subtitleText}>Price</Text>
          <Text style={styles.titleText}>{`C$${car.price}`}</Text>
        </View>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => handleAddToCart(car)}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Detail;
function createStyleSheet(cardWidth: number) {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      marginTop: 12,
      flex: 1,
      justifyContent: "center",
    },
    textContainer: {
      flex: 1,
      marginTop: 4,
      paddingHorizontal: 4,
      justifyContent: "flex-start",
    },
    titleText: {
      color: "#000",
      fontFamily: "Arial",
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: 32,
      borderColor: "#000",
      letterSpacing: -1,
    },
    subtitleText: {
      color: "#000",
      fontFamily: "Arial",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "400",
      marginTop: 12,
      textAlign: "left"
    },
    FlatListContainer: {
      flex: 1,
      height: 360,
      borderRadius: 8,
      marginRight: 4,
    },
    imageContainer: {
      flex: 1,
      width: 340,
      height: 360,
      borderRadius: 4,
      marginRight: 4,
    },
    categoryContainer: {
      height: 48,
      width: 80,
      padding: 12,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 12.5,
      flexShrink: 0,
      borderRadius: 6,
      borderWidth: 1.3,
      border: "solid",
      borderColor: "rgba(0, 0, 0, 0.20)",
      marginTop: 8,
    },
    bottomContainer: {
      paddingHorizontal: 16,
      flexDirection: "row",
      width: "100%",
      height: 100,
      flexShrink: 0,
      borderTop: 1,
      borderWidth: 1.3,
      border: "solid",
      borderColor: "rgba(0, 0, 0, 0.20)",
      justifyContent: "space-between",
      alignItems: "flex-start",

    },
    addToCartButton: {
      width: 190,
      paddingHorizontal: 18,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      height: 50,
      backgroundColor: "#000",
      marginTop: 12
    },
    buttonText: {
      color: "#FFF",
      fontFamily: "Arial",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "500",
      borderColor: "#000",
    },
    headerContainer: {
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 8,
      paddingHorizontal: 12,
    },
    cartButton: {
      height: 20,
      width: 20,
      marginRight: 12
    },
  });
}