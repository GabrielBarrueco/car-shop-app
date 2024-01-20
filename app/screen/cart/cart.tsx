import { Text, View, TouchableOpacity, FlatList } from "react-native";
import React, { useMemo } from "react";
import { useCartStore } from "../../../store/cartStore";
import CartItemCard from "../../components/cartItem/cartItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Trash2 } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { cartStyleSheet } from "./cart.style";

const Cart = () => {
  const styles = useMemo(() => cartStyleSheet(), []);
  const { cart, total, removeAll: handleRemoveAll } = useCartStore();
  const value = total();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleStripeCheckout = () => alert("ToDo: Stripe checkout")

  return (
    <>
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.cartButton} onPress={handleGoBack}>
            <ChevronLeft color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Cart</Text>
          <TouchableOpacity style={styles.cartButton} onPress={() => handleRemoveAll()}>
            <Trash2 color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          {cart.length === 0 ? (
            <Text style={styles.titleText}>Your cart is empty</Text>
          ) : (
            <FlatList
              data={cart}
              renderItem={({ item }) => {
                return (
                  <CartItemCard cartItem={item} />
                )
              }}
            />
          )}
          <View style={styles.textContainer}>
            <Text style={styles.subtitleText}>Total</Text>
            <Text style={styles.titleText}>{value.toFixed(2)}</Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleStripeCheckout}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Cart;
