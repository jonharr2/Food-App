import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
  search: {
    padding: 16,
  },
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
