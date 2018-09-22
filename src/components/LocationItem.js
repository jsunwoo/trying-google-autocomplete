import React from "react";
import { View, Text, StyleSheet } from "react-native";

class LocationItem extends PureComponent {
  render() {
    return (
      <View>
        <Text>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center"
  }
});
