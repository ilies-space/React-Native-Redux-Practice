import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

class Allitems extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 36, alignItems: "center" }}>
        <Text> {this.props.name} </Text>
        <Button
          title="change to Oldm"
          onPress={() => this.props.chnageName("Ouldenoeur")}
        />
        <Button title="test" onPress={() => this.props.test()} />
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
    test: () => dispatch({ type: "test" }),
    chnageName: (value) => dispatch({ type: "chnageName", value }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Allitems);
