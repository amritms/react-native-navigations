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
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import signupImage from "../assets/images/register_logo.png";

const { width: WIDTH } = Dimensions.get("window");

export default class SignupScreen extends Component {
  state = {
    loading: false,
    name: "",
    phone: "",
    email: "",
    password: ""
  };
  static navigationOptions = {
    header: null
  };

  login() {
    this.setState({ loading: true });
  }

  // Go to the signup page
  goToSignup() {
    this.props.navigator.push({
      component: Signup
    });
  }

  toggleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.state.loading ? (
      <View style={styles.body}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={signupImage} style={styles.logo} />
          <Text style={styles.welcomeBack}>Welcome Aboard!</Text>
          <Text style={styles.subHeading}>Signup with iCab simple steps</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon name={"ios-person"} size={28} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={"Name"}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ name: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name={"ios-call"} size={28} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={"Phone Number"}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ phone: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name={"ios-mail"} size={28} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ email: text })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name={"ios-lock"} size={28} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name={"ios-lock"} size={28} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={"Confim Password"}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            width: WIDTH - 55,
            justifyContent: "flex-end",
            marginTop: 10
          }}
        >
          <Text>Already a User ?</Text>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: "rgba(50,119,217,1)" }}>Login now</Text>
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
    marginVertical: 15
  },
  text: {
    color: "rgba(255,255,255,1)"
  },
  forgotPassword: {
    textAlign: "right",
    color: "black"
  }
});
