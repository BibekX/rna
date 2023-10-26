import React from "react";
import {
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
} from "react-native";
import colors from "../config/colors";

export default function Welcome() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <SafeAreaView style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <View
          style={{
            backgroundColor: colors.primary,
            width: "100%",
            height: 70,
          }}
        ></View>
        <View
          style={{
            backgroundColor: colors.secondary,
            width: "100%",
            height: 70,
          }}
        ></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
  },
  logoContainer: {
    marginTop: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
