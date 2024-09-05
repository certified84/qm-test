import { verifyInstallation } from "nativewind";
import { Text, View, ImageBackground, Image, StatusBar } from "react-native";

export default function Index() {
  try {
    verifyInstallation();
  } catch {
    console.log("Native wind not installed");
  }

  return (
    <View style={{ flex: 1 }} className="flex-1 bg-red-600">
      <ImageBackground
        style={{
          height: "35%",
          borderBottomRightRadius: 60,
          backgroundColor: "#BCDDF4",
        }}
        // className="flex-1 h-full bg-red"
        source={require("../assets/images/background.png")}
        resizeMode="cover"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            marginTop: StatusBar.currentHeight
              ? StatusBar.currentHeight + 50
              : 100,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              width: 50,
              height: 50,
              borderWidth: 2,
              borderColor: "#BCDDF4",
            }}
          ></View>
          <View style={{ flexDirection: 'row' }}>

          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
