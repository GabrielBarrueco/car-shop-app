import { StyleSheet, Text, Image, Dimensions, View, TouchableOpacity, FlatList, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { Car } from "../../service/api.interface";
import { useCartStore } from "../../store/cartStore";
import CartItemCard from "../components/cartItem";

const Cart = () => {
  const width = (Dimensions.get("screen").width - 32) / 2;
  const styles = useMemo(() => createStyleSheet(width), [])
  const { cart } = useCartStore();

  return (
    <>
      <View style={styles.container}>
        <View>
          <FlatList
            data={cart}
            renderItem={({ item }) => {
              return (
                <CartItemCard cartItem={item}/>
              )
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subtitleText}>Total</Text>
          <Text style={styles.titleText}>30.000</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Cart;

function createStyleSheet(cardWidth: number) {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      marginTop: 12,
      flex: 1,
      justifyContent: "flex-start",
    },
    textContainer: {
      flex: 1,
      flexDirection: "row",
      marginTop: 4,
      paddingHorizontal: 4,
      alignContent: "flex-end",
      justifyContent: "space-between",
      alignItems: "flex-end",
      padding: 12,
    },
    titleText: {
      color: "#000",
      fontFamily: "Arial",
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: "400",
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
    imageContainer: {
      flex: 1,
      width: 340,
      height: 360,
      borderRadius: 8,
      marginRight: 4,
    },
    itemContainer: {
      flex: 1,
      height: 100,
      padding: 12,
      flexDirection: "row",
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
    checkoutButton: {
      flex: 1,
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
  });
}