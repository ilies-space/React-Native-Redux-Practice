import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import Allitems from "./products";
import SelectedItems from "./SelectedItems";
import ManagProducts from "./ManageProducts";

// redux :
import { createStore } from "redux";
import { Provider } from "react-redux";
///------------

export default () => {
  const [name, setName] = useState("ilies");
  const [password, setpassword] = useState("PASWORD");
  //for testing onley :
  const [AllProducts, setAllProducts] = useState([
    { ProductName: "Coca cola", ProductPrice: 170 },
    { ProductName: "ifri", ProductPrice: 25 },
    { ProductName: "nutella", ProductPrice: 1500 },
    { ProductName: "Coca cola", ProductPrice: 170 },
    { ProductName: "ifri", ProductPrice: 25 },
    { ProductName: "nutella", ProductPrice: 1500 },
    { ProductName: "Coca cola", ProductPrice: 170 },
    { ProductName: "ifri", ProductPrice: 25 },
    { ProductName: "nutella", ProductPrice: 1500 },
  ]);
  //----

  //for testing onley :
  const [SeectedItems, setSeectedItems] = useState([
    { ProductName: "Coca cola", ProductPrice: 170 },
    { ProductName: "ifri", ProductPrice: 25 },
  ]);
  //----

  const data = { name, password, AllProducts, SeectedItems };

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
      case "add":
        setAllProducts((prevList) => {
          return [
            {
              ProductName: action.name,
              ProductPrice: action.price,
              key: Math.random().toString(),
            },
            ...prevList,
          ];
        });
        console.log("add");
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
        <ManagProducts />
        <Allitems />
      </Provider>
    </View>
  );
};
