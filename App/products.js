import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

class Allitems extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 36, alignItems: "center" }}>
        <Text> {this.props.name} </Text>
        <Button title="Add item to list" onPress={() => this.props.add()} />

        {this.props.AllProducts.map((data, key) => {
          return (
            <View>
              <Text>
                {data.ProductName.substring(0, 2)} -->
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch({ type: "add" }),
    chnageName: (value) => dispatch({ type: "chnageName", value }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Allitems);
