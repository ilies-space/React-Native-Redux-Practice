import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import Allitems from "./products";
///------------

const state = {
  name: "ilies",
};

const changeValue = () => {
  console.log(state.name);
  setState({ name: "oldm" });
};

export default () => {
  const [name, setName] = useState("ilies");

  return (
    <View style={{ flex: 1, paddingTop: 36 }}>
      <Text> {name} </Text>
      <Button title="change to Oldm" onPress={() => setName("oldm")} />
    </View>
  );
};
