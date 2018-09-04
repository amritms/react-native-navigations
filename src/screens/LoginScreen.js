import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  AsyncStorage
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import loginImage from "../assets/images/login_logo.png";

const { width: WIDTH } = Dimensions.get("window");

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.loadApp();
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    loading: false,
    email: "",
    password: "",
    showPassword: false,
    userType: ""
  };
  static navigationOptions = {
    header: null
  };

  loadApp = async () => {
    const userName = await AsyncStorage.getItem("userName");
    this.props.navigation.navigate(userName ? "App" : "Auth");
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleLogin = async () => {
    let user_type = "driver";
    if (this.state.email == "amritms@gmail.com") {
      user_type = "passenger";
    }
    await AsyncStorage.setItem("userName", "amrit");
    await AsyncStorage.setItem("userType", user_type);

    this.setState({ loading: true });
    let user = { type: "driver" };

    this.props.navigation.navigate("App", { user });
  };

  toggleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.state.loading ? (
      <View style={styles.body}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={loginImage} style={styles.logo} />
          <Text style={styles.welcomeBack}>Welcome Back!</Text>
          <Text style={styles.subHeading}>Login to continue using iCab</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon name={"ios-mail"} size={28} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChange={this.handleChange}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name={"ios-lock"} size={28} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={!this.state.showPassword}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            style={styles.btnEye}
            onPress={this.toggleShowPassword}
          >
            <Icon
              name={
                this.state.showPassword == false ? "ios-eye" : "ios-eye-off"
              }
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: WIDTH - 45 }}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={this.handleLogin}>
          <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            width: WIDTH - 55,
            justifyContent: "flex-end",
            marginTop: 20
          }}
        >
          <Text>New User ?</Text>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "rgba(50,119,217,1)" }}>
                Sign up for a new account
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );

    // A simple UI with a toolbar, and content below it.
    return <View>{content}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    flexDirection: "column",

    alignItems: "center",
    flexGrow: 1
  },
  body: {
    flex: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
    marginTop: 50
  },
  logo: {},
  welcomeBack: {
    fontSize: 22,
    marginTop: 30,
    color: "black"
  },
  subHeading: {
    color: "black"
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 6,
    fontSize: 16,
    paddingLeft: 45,
    borderColor: "rgba(206,208,210,1)",
    borderWidth: 1,
    color: "black",
    marginHorizontal: 25
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 37,
    fontSize: 26
  },
  btnEye: {
    position: "absolute",
    top: 10,
    right: 37,
    fontSize: 26
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 6,
    backgroundColor: "rgba(50,119,217,1)",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20
  },
  text: {
    color: "rgba(255,255,255,1)"
  },
  forgotPassword: {
    textAlign: "right",
    color: "black"
  }
});
