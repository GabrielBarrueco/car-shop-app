import { StyleSheet, Text, Image, Dimensions, View, TouchableOpacity, FlatList } from "react-native";
import React, { useMemo } from "react";
import { useCartStore } from "../../../store/cartStore";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { detailStyleSheet } from "./detail.style";

const Detail = ({ route }) => {
  const width = (Dimensions.get("screen").width - 32) / 2;
  const styles = useMemo(() => detailStyleSheet(width), []);
  const { add: handleAddToCart } = useCartStore();
  const car = route.params?.car;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
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
              data={car?.image}
              renderItem={({ item }) => {
                return (
                  <Image
                    style={styles.imageContainer}
                    source={{ uri: item.url }}
                  />
                );
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{car?.name}</Text>
            <View style={styles.categoryContainer}>
              <Text>{car?.category}</Text>
            </View>
            <Text style={styles.subtitleText}>{car?.description}</Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.subtitleText}>Price</Text>
          <Text style={styles.titleText}>{`C$${car?.price}`}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(car)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Detail;
