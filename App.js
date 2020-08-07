import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { connect } from "react-redux";
//Screen :
import AnotherScreen from "./screen2";
///------------
export default function App() {
  //consts goes here :
  const initialState = {
    name: "ilies 911",
  };
  //---
  //fucntions goes here :

  const reducer = (state = initialState) => {
    return state;
  };
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
