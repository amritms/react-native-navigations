import React, { Component } from "react";
import { View, Text, StyleSheet, Button, AsyncStorage } from "react-native";

class SettingsScreen extends Component {
  state = {
    userType: null
  };
  constructor() {
    super();
    this.loadApp();
  }

  signOut = async () => {
    AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  loadApp = async () => {
    const userType = await AsyncStorage.getItem("userType");

    this.setState({ userType });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Setting Screen</Text>
        <Text>User Type: {this.state.userType}</Text>
        <Button title="sign Out" onPress={this.signOut} />
      </View>
    );
  }
}
export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
