import React from "react";
import { View, Text, StyleSheet } from "react-native";

class LocationItem extends React.Component {
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
