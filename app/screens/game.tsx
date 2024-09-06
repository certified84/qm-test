import TimerIcon from "@/assets/icons/timer";
import CirclularProgress from "@/components/CirclularProgress";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  StatusBar,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import RemixIcon from "react-native-remix-icon";

const GameScreen = ({ route }) => {
  const { questions } = useLocalSearchParams();

  const [index, setIndex] = useState(0);
  const progress = new Animated.Value(100);

  const question = questions[index] as unknown as IQuestion;

  const [answers, setAnswers] = useState<
    { value: string; isCorrect: boolean }[]
  >([]);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  useEffect(() => {
    setSelected(undefined);
  }, [index]);

  useEffect(() => {
    // setSelected(undefined);
  }, [selected]);

  console.log("route", question);
  return (
    <ImageBackground
      className="flex-1 bg-[#2364AA]"
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
        <View className="flex-row items-center">
          <TimerIcon />
          <Text className="text-white">00.00.40</Text>
          <View className="absolute left-1/2">
            <CirclularProgress progress={progress} />
          </View>
        </View>

        <View className="bg-white border-[8px] border-[#00CBF7] p-4 rounded-xl mt-6 items-center">
          <Text className="my-2 font-bold text-2xl">Question {index + 1}</Text>
          <Text className="my-4 text-center text-lg">
            Who was the First President of the United States?
          </Text>
        </View>

        <Text className="text-white mt-8 font-semibold text-xl">
          Choose Correct Option
        </Text>

        <Option
          onSelect={setSelected}
          option="George Washington"
          isCorrect
          index={0}
        />
        <Option
          onSelect={setSelected}
          option="George Washington"
          isCorrect={false}
          index={1}
        />
        <Option onSelect={setSelected} option="George Washington" index={2} />
        <Option onSelect={setSelected} option="George Washington" index={3} />
      </View>
    </ImageBackground>
  );
};

export default GameScreen;

interface OptionProps {
  onSelect: (value: string) => void;
  option: string;
  isCorrect?: boolean | undefined;
  index: number;
}

const Option: React.FC<OptionProps> = ({
  onSelect,
  option,
  isCorrect,
  index,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="flex-row items-center justify-between mt-4 rounded-[100px] p-5 px-8"
      style={{
        borderWidth: isCorrect !== undefined ? 4 : 0,
        borderColor: isCorrect ? "#00EA62" : "#F69798",
        backgroundColor:
          isCorrect !== undefined
            ? isCorrect
              ? "#009028"
              : "#C30012"
            : "#FFFFFF",
      }}
    >
      <View className="flex-row items-center">
        <Text
          style={{ color: isCorrect !== undefined ? "white" : "black" }}
          className="font-bold text-lg"
        >
          {String.fromCharCode(65 + index)}.
        </Text>
        <Text
          className="ml-4"
          style={{ color: isCorrect !== undefined ? "white" : "black" }}
        >
          {option}
        </Text>
      </View>

      {isCorrect !== undefined && (
        <RemixIcon
          name={isCorrect ? "checkbox-circle-fill" : "close-circle-fill"}
          color={isCorrect ? "#00EA62" : "#F69798"}
          size={24}
        />
      )}
    </TouchableOpacity>
  );
};
