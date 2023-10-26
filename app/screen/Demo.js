import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function Demo() {
  const handlePress = () => console.log("test");
  console.log(Dimensions.get("screen"));
  console.log("window dimensions", useWindowDimensions());
  console.log("orientation", useDeviceOrientation());

  return (
    <SafeAreaView style={[styles.container, background]} onPress={handlePress}>
      {/* Text */}
      <Text numberOfLines={1}>Hello React Native</Text>
      {/* Button */}
      <Button
        title="Click Me"
        color="orangered"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
      {/* Local Image */}
      <Image
        source={require("./assets/icon.png")}
        style={{ height: 100, width: 100, marginTop: 10 }}
      />
      {/* Touchable Highlight */}
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <View
          style={{ width: 200, height: 70, backgroundColor: "blue" }}
        ></View>
      </TouchableHighlight>
      {/* Global Image */}
      <Image
        blurRadius={10}
        source={{
          uri: "https://picsum.photos/200/300",
          height: 200,
          width: 200,
        }}
      />
    </SafeAreaView>
  );
}

const background = {
  backgroundColor: "turquoise",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
