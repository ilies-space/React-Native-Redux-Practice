import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

export const FunctionnelComponents = () => {
  const name = useSelector((state) => state.name);
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text> {name} </Text>
    </View>
  );
};
