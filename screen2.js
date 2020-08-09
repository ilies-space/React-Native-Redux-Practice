import React, { Component, useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class AnotherScreen extends Component {
  state = {
    TextInputValue: "",
  };

  updateValue = (x) => {};

  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Text>{this.props.name}</Text>
        <TextInput
          placeholder={"VALUES GOES HERE"}
          onChangeText={(value) => this.updateValue(value)}
        />
        <Button title="add" on onPress={() => this.props.add("Hello World")} />

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
      </View>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AnotherScreen);
