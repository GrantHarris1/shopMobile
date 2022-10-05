import * as React from "react";
import CustomInput from "../../src/components/CustomInput";
import CutomButton from "../../src/components/CutomButton";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import logo from "../../assets/images/logo.png";

export default function SignInScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { height } = useWindowDimensions();

  const onSignInPressed = () =>{
      console.warn("Sign In");
  };

  const onForgotPasswordPressed = () => {
      console.warn('Forgot Password');
  };
  return (
    <View style={styles.root}>
      <Image
        source={logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CutomButton text="Sign In" onPress={onSignInPressed} />
      <CutomButton text="Forgot password?" onPress={onForgotPasswordPressed} />

      <Text
        onPress={() => alert("Please sign in above.")}
        style={{ fontSize: 16, fontWeight: "bold", padding: 20 }}
      >
        {" "}
        Please Sign in
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    height: "70%",
    maxHeight: 300,
  },
});
