import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const FunctionnelComponents = () => {
  const AllProducts = useSelector((state) => state.AllProducts);

  //dispatcher :
  const dispatch = useDispatch();
  const TestHandler = () => {
    dispatch({ type: "test" });
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Button title="Test" onPress={() => TestHandler()} />
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
