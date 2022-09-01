import React from "react";
import styled from "styled-components/native";
import { Text, Avatar, Button, Card, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    address = "100 Random St.",
    isOpenNow = true,
    rating = 4,
    isClosedTemp,
  } = restaurant;

  return (
    <Card elevation={5} styles={styles.card}>
      <Card.Cover styles={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
