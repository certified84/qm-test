import { ImageBackground } from "react-native";

const GameScreen = () => {
  return (
    <ImageBackground
      className="flex-1 bg-[#2364AA]"
      source={require("../../assets/images/background.png")}
    ></ImageBackground>
  );
};

export default GameScreen;