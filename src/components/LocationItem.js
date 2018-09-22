import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

class LocationItem extends PureComponent {
  render() {
    return (
      <View style={styles.root}>
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

export default LocationItem;
