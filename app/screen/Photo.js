import React from "react";
import { Image, StyleSheet, View, SafeAreaView } from "react-native";
import colors from "../config/colors";

export default function Photo() {
  return (
    <SafeAreaView style={styles.conainer}>
      <View style={styles.buttonContainer}>
        <View style={styles.deleteButton}></View>
        <View style={styles.closeButton}></View>
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conainer: { backgroundColor: "black", flex: 1 },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  deleteButton: { backgroundColor: colors.primary, width: 50, height: 50 },
  closeButton: { backgroundColor: colors.secondary, width: 50, height: 50 },
  image: { height: "100%", width: "100%", flex: 1 },
});
