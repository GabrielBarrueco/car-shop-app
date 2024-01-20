import { View, StyleSheet, Text, FlatList } from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Card from "../../components/card/card";
import { getCarsList } from "../../../service/api";
import { Car } from "../../../service/api.interface";
import { SafeAreaView } from "react-native-safe-area-context";
import { homeStyleSheet } from "./home.styles";

const Home = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const styles = useMemo(() => homeStyleSheet(), [])
  const getCars = useCallback(async () => {
    const response = await getCarsList();
    setCars(response);
  }, []);

  useEffect(() => {
    getCars();
  }, [getCars]);

  const keyExtractor = (item: Car) => item.car_id.toString();

  const renderEmptyComponent = () => {//ToDo: improve this component
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>No cars to display</Text> 
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }} testID="safeAreaView">
      <View style={styles.container} testID="containerView">
        <View style={styles.headerContainer} testID="headerContainerView">
          <Text style={styles.titleText}>Discover</Text>
        </View>
        <FlatList
          data={cars}
          numColumns={2}
          renderItem={({ item }) => <Card car={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          ListEmptyComponent={renderEmptyComponent}
          testID="flatList"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home
