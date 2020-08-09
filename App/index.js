import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import Allitems from "./products";

// redux :
import { createStore } from "redux";
import { Provider } from "react-redux";
///------------

export default () => {
  const [name, setName] = useState("ilies");
  const [password, setpassword] = useState("PASWORD");

  const data = { name, password };

  //redux :
  //fucntions goes here :

  const reducer = (state = data, action) => {
    switch (action.type) {
      case "update_Value":
        return { name: "new value" };

      case "deleteValue":
        return { name: "" };

      case "chnageName":
        setName(action.value);
        console.log(action.value);
        break;
      case "test":
        console.log("test");
      default:
        break;
    }

    return state;
  };
  const store = createStore(reducer);

  //-------

  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Allitems />
      </Provider>
    </View>
  );
};
