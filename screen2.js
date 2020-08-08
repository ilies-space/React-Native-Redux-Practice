import React, { Component, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { connect } from "react-redux";

class AnotherScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 13,
    };
  }

  onCHangeHandler = (x) => {
    this.setState({ count: x });
  };

  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Text>{this.props.name}</Text>

        <TextInput
          placeholder={"VALUES GOES HERE"}
          onChangeText={(value) => this.props.updateValue(value)}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateValue: () => dispatch({ type: "update_Value" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnotherScreen);
