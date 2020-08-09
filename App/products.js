import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

class Allitems extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 36, alignItems: "center" }}>
        <Button
          title="Add item to Selected list"
          onPress={() => this.props.add("product x", 666)}
        />

        {this.props.AllProducts.map((data, key) => {
          return (
            <View>
              <Text>
                {data.ProductName} -->
                {data.ProductPrice + " DZD"}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    AllProducts: state.AllProducts,
    passwrod: state.password,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (name, price) => dispatch({ type: "add", name, price }),
    chnageName: (value) => dispatch({ type: "chnageName", value }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Allitems);
