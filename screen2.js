import React, { Component } from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";

class AnotherScreen extends Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

export default connect(mapStateToProps)(AnotherScreen);
