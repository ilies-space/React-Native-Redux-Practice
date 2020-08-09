import React, { Component, useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const Screen3 = () => {
  return (
    <View style={{ flex: 1 }}>
      {this.props.AllProducts.map((data, key) => {
        return (
          <TouchableOpacity key={key} onPress={() => itemPressHandler()}>
            <Text>
              {data.ProductName} ->
              {data.ProductPrice + " DZD"}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    name: state.name,
    AllProducts: state.AllProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    delete: () => dispatch({ type: "deleteValue" }),
    add: (value) => dispatch({ type: "add", value }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen3);
