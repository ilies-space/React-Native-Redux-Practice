import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
//Screen :
import { AnotherScreen } from "./AnotherScreen";
///------------
export default function App() {
  //consts goes here :
  const initialState = {
    name: "ilies",
  };
  //---
  //fucntions goes here :

  const reducer = (state = initialState) => {};
  const store = createStore(reducer);

  //----------
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <AnotherScreen />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
