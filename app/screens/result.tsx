import { useLocalSearchParams, useNavigation } from "expo-router";
import {
  ImageBackground,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import RemixIcon from "react-native-remix-icon";
import { Buffer } from "buffer";

const ResultScreen = () => {
  const navigation = useNavigation();
  const { answers } = useLocalSearchParams();
  const decodedAnswers = Buffer.from(answers as string, "base64").toString(
    "utf-8"
  );
  const parsedAnswers = JSON.parse(decodedAnswers) as {
    value: string;
    isCorrect: boolean;
  }[];
  console.log(parsedAnswers.length);
  const correct = parsedAnswers.filter((answer) => answer.isCorrect).length;
  const inCorrect = parsedAnswers.filter((answer) => !answer.isCorrect).length;
  console.log(parsedAnswers);

  return (
    <ImageBackground
      className="flex-1 bg-[#2364AA] justify-between"
      source={require("../../assets/images/background.png")}
    >
      <View
        className="flex-1 px-4"
        style={{
          marginTop: StatusBar.currentHeight
            ? StatusBar.currentHeight + 70
            : 100,
        }}
      >
        <Text className="text-white self-center font-bold text-2xl">
          Result
        </Text>

        <View className="bg-[#DFF9FF] border-[8px] border-[#00CBF7] p-4 rounded-xl mt-6 items-center">
          <Text>Total time used:01:00</Text>
          <View className="flex-row items-center justify-center mt-3">
            <Text className="font-semibold text-lg mr-2">
              {correct} Correct
            </Text>
            <RemixIcon name="checkbox-circle-fill" color="#00C449" />

            <View className="h-10 w-0.5 bg-[#5A5A5A] mx-2" />

            <Text className="font-semibold text-lg mr-2">
              {inCorrect + (10 - parsedAnswers.length)} Incorrect
            </Text>
            <RemixIcon name="close-circle-fill" color="#F9474B" />
          </View>
        </View>

        <View className="bg-[#DFF9FF] border-[8px] border-[#00CBF7] p-4 rounded-xl mt-6 items-center">
          <Text className="my-2 font-bold text-[100px]">😃</Text>
          <Text className="my-2 text-center text-lg">
            Better luck next time
          </Text>
          <Text className="mb-12 text-center font-semibold text-xl">
            Congratulations, you won
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="p-4 pt-0"
        activeOpacity={0.5}
        onPress={() => navigation.navigate("index")}
      >
        <View className="h-14 mx-4 bg-[#ED7B2B] rounded-[100px] bg-gradient-to-r from-cyan-500 to-blue-500" />
        <View className="w-full h-14 absolute left-3 bottom-7 bg-[#00CBF7] items-center justify-center rounded-[100px]">
          <Text className="text-lg font-medium">Go Home</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default ResultScreen;
