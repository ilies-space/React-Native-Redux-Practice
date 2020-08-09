import React, { Component, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";

class AnotherScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 13,
  //   };
  // }

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
        <Button title="delete" on onPress={() => this.props.delete()} />
        <Button
          title="send"
          on
          onPress={() => this.props.send("Hello World")}
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
    delete: () => dispatch({ type: "deleteValue" }),
    send: (value) => dispatch({ type: "send", value }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnotherScreen);
