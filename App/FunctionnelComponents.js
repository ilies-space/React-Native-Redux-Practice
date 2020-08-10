import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

export const FunctionnelComponents = () => {
  const AllProducts = useSelector((state) => state.AllProducts);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      {AllProducts.map((data, key) => {
        return (
          <View style={{ flexDirection: "row", alignContent: "flex-start" }}>
            <Text> {data.ProductName} </Text>
            <Text> {data.ProductPrice} </Text>
          </View>
        );
      })}
    </View>
  );
};
