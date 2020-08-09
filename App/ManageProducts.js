import React, { Component } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";

class ManagProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "exple",
      priceValue: 0,
    };
  }

  render() {
    //------nameproducts : -------//
    const nameChangeHandler = (value) => {
      this.setState({ nameValue: value });
    };
    //------End : -------//

    //------priceProducts : -------//
    const paswwrodChangeHandler = (value) => {
      this.setState({ priceValue: value });
    };
    //------End : -------//

    return (
      <View style={{ flex: 1, paddingTop: 36, alignItems: "center" }}>
        <View>
          <TextInput
            placeholder={"Name"}
            onChangeText={(value) => nameChangeHandler(value)}
          />
          <TextInput
            placeholder={"price"}
            onChangeText={(value) => paswwrodChangeHandler(value)}
          />
        </View>
        <Button
          title="Add item to list"
          onPress={() =>
            this.props.add(this.state.nameValue, this.state.priceValue)
          }
        />
        <Text>All Products : </Text>

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
    AllProducts: state.AllProducts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (name, price) => dispatch({ type: "add", name, price }),
    chnageName: (value) => dispatch({ type: "chnageName", value }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagProducts);
