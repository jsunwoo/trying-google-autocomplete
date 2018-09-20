import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import MapView from "react-native-maps";
import { GoogleAutoComplete } from "react-native-google-autocomplete";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <View style={styles.container}>
        <GoogleAutoComplete
          style={styles.upper}
          apiKey="AIzaSyARBOLxkEHtMipbz3afw8mZJN1dUpTPmKg"
        >
          {({ handleTextChange, locationResults }) => (
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Search a place"
                onChangeText={handleTextChange}
              />
            </View>
          )}
        </GoogleAutoComplete>

        <MapView
          style={styles.map}
          region={{
            latitude: 59.32932349999999,
            longitude: 18.06858080000063,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 59.32932349999999,
              longitude: 18.06858080000063
            }}
            title={"My marker's title"}
            descriptiion={"My marker's discription"}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  textInput: {
    height: 40,
    borderWidth: 1
  },
  upper: {
    flex: 1
  }
});
