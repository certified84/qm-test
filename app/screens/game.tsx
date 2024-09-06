import TimerIcon from "@/assets/icons/timer";
import CirclularProgress from "@/components/CirclularProgress";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ImageBackground,
  View,
  StatusBar,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import RemixIcon from "react-native-remix-icon";
import { Buffer } from "buffer";
import { shuffleArray } from "@/util";
import CircularProgress from "react-native-circular-progress-indicator";

const GameScreen = () => {
  const { questions } = useLocalSearchParams();
  const decodedQuestions = Buffer.from(questions as string, "base64").toString(
    "utf-8"
  );
  const parsedQuestions = JSON.parse(decodedQuestions) as IQuestion[];

  const [index, setIndex] = useState(0);
  // const progress = useRef(new Animated.Value(100)).current;

  // const startAnimation = () => {
  //   progress.setValue(100);
  //   Animated.timing(progress, {
  //     toValue: 0,
  //     duration: 10000,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // const animatedProgressValue = progress.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: [1, 10],
  // });
  const [progress, setProgress] = useState(10);

  const [answers, setAnswers] = useState<
    { value: string; isCorrect: boolean }[]
  >([]);

  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [options, setOptions] = useState(
    shuffleArray([
      ...parsedQuestions[index]?.incorrect_answers,
      parsedQuestions[index]?.correct_answer,
    ])
  );

  useEffect(() => {
    setSelected(undefined);
    setProgress(10);
    setOptions(
      shuffleArray([
        ...parsedQuestions[index]?.incorrect_answers,
        parsedQuestions[index]?.correct_answer,
      ])
    );

    const intervalId = setInterval(() => {
      if (index === parsedQuestions.length - 1) {
        router.push({
          pathname: "screens/result",
          params: {
            answers: Buffer.from(JSON.stringify(answers)).toString("base64"),
          },
        });
        clearInterval(intervalId);
        return;
      }
      setIndex((prevIndex) => prevIndex + 1);
    }, 10000);

    const timerId = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearInterval(timerId);
    };
  }, [index]);

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
          <Text className="text-white">00.00.{progress}</Text>
          <View className="absolute left-[43%] items-center">
            <CircularProgress
              value={(progress / 10) * 100}
              activeStrokeWidth={12}
              progressValueColor={"#ecf0f1"}
              radius={20}
              showProgressValue={false}
            />
            <Text className="text-white absolute top-[30%]">{progress}</Text>
          </View>
        </View>

        <View className="bg-white border-[8px] border-[#00CBF7] p-4 rounded-xl mt-6 items-center">
          <Text className="my-2 font-bold text-2xl">Question {index + 1}</Text>
          <Text className="my-4 text-center text-lg">
            {decodeURIComponent(parsedQuestions[index]?.question)}
          </Text>
        </View>

        <Text className="text-white mt-8 font-semibold text-xl">
          Choose Correct Option
        </Text>

        {options.map((answer, i) => (
          <Option
            key={i}
            onSelect={(text) => {
              const newAnswers = [
                ...answers,
                {
                  value: text,
                  isCorrect:
                    decodeURIComponent(
                      parsedQuestions[index]?.correct_answer
                    ) === text,
                },
              ];
              setSelected(text);
              setAnswers(newAnswers);
            }}
            selected={selected}
            option={decodeURIComponent(answer)}
            enabled={selected === undefined}
            correctAnswer={decodeURIComponent(
              parsedQuestions[index]?.correct_answer
            )}
            index={i}
          />
        ))}
      </View>
    </ImageBackground>
  );
};

export default GameScreen;

interface OptionProps {
  onSelect: (value: string) => void;
  selected?: string | undefined;
  option: string;
  isCorrect?: boolean | undefined;
  correctAnswer: string;
  index: number;
  enabled?: boolean;
}

const Option: React.FC<OptionProps> = ({
  onSelect,
  option,
  selected,
  // isCorrect,
  index,
  correctAnswer,
  enabled = true,
}) => {
  const isCorrect =
    selected === undefined || selected !== option
      ? undefined
      : decodeURIComponent(correctAnswer) === option;
  return (
    <TouchableOpacity
      disabled={!enabled}
      activeOpacity={0.5}
      onPress={() => {
        onSelect(option);
      }}
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
