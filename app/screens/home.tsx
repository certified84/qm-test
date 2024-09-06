import "../../global.css";
import { verifyInstallation } from "nativewind";
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageSourcePropType,
  ActivityIndicator,
} from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ShareBig from "@/assets/icons/share-big.icons";
import RemixIcon from "react-native-remix-icon";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "@/constants/assets";
import { router } from "expo-router";
import { useState } from "react";
import { fetchQuestionsAPI } from "@/api/questions";
import { Buffer } from "buffer";

export default function HomeScreen() {
  try {
    verifyInstallation();
  } catch {
    console.log("Native wind not installed");
  }

  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await fetchQuestionsAPI();
      if (response.status === "success") {
        router.push({
          pathname: "screens/game",
          params: {
            questions: Buffer.from(JSON.stringify(response?.results)).toString(
              "base64"
            ),
          },
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <View className="flex-1 bg-white">
      <ImageBackground
        className="h-[350] w-full overflow-hidden bg-[#2364AA] rounded-br-[60px] px-4"
        source={require("../../assets/images/background.png")}
      >
        <View
          className="flex-row justify-between items-center"
          style={{
            marginTop: StatusBar.currentHeight
              ? StatusBar.currentHeight + 50
              : 100,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center border-[#BCDDF4] border-2"
          >
            <Image className="w-6 h-6" source={avatar1} />
          </TouchableOpacity>
          <View className="flex-row items-center">
            <TouchableOpacity
              activeOpacity={0.5}
              className="flex-row py-2 px-3 items-center border-[1px] border-[#E4F1FA] mr-2 rounded-3xl"
            >
              <RemixIcon name="eraser-line" size={18} color="#E4F1FA" />
              <Text className="text-[#E4F1FA] ml-1">0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              className="flex-row p-2 px-3 bg-[#E4F1FA] rounded-3xl items-center"
            >
              <Text className="text-[#17478B] text-sm font-medium">
                ₦5,000.00
              </Text>
              <RemixIcon name="add-circle-line" size={18} color="#17478B" />
            </TouchableOpacity>

            <TouchableOpacity className="ml-3" activeOpacity={0.5}>
              <RemixIcon name="notification-3-line" color="#E4F1FA" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-4 flex-row">
          <Text className="text-white text-2xl font-semibold">Hello John</Text>
          <HelloWave />
        </View>
        <Text className="text-white mt-[4px] text-base">
          Let's play and earn
        </Text>
      </ImageBackground>

      <ScrollView className="absolute w-full top-[230px] px-4 pb-28">
        <View className="shadow-md">
          <ImageBackground
            className=" bg-white rounded-3xl overflow-hidden"
            source={require("../../assets/images/home-card-bg.png")}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              hitSlop={5}
              className="self-end m-5"
            >
              <RemixIcon name="question-fill" color="#51A2E0" />
            </TouchableOpacity>

            <View className="items-center justify-center my-2">
              <Text className="text-[#17478B] text-2xl font-bold">
                Game Prize
              </Text>
              <Text className="text-[#17478B] text-5xl font-bold my-2">
                1,000,000
              </Text>
              <Text className="font-medium text-base">
                Next Game: Tomorrow, 8PM
              </Text>
            </View>

            <View className="bg-[#17478B] flex-row p-4 mt-8 justify-between items-center">
              <TouchableOpacity
                className="flex-row items-center gap-2 bg-white p-2 rounded-3xl px-3"
                onPress={fetchQuestions}
              >
                <Text>Join Game</Text>
                {loading && <ActivityIndicator color={"#17478B"} />}
              </TouchableOpacity>
              <Text className="text-white font-bold">
                Entry Fee <Text className="font-normal">₦100.00</Text>
              </Text>
            </View>
          </ImageBackground>
        </View>

        <Text className="mt-6 font-bold text-lg">Top Gamers of the day</Text>

        <View className="flex-row justify-between mt-5">
          {topGamers.map((item, index) => (
            <TopGamer
              key={index}
              name={item.name}
              price={item.price}
              background={item.background}
              image={item.image}
            />
          ))}
        </View>

        <View className="bg-[#2364AA] p-6 pr-0 mt-8 rounded-[20px] flex-row items-center">
          <View className="flex-1">
            <Text className="text-white font-bold text-xl">
              Refer and Earn with your friends
            </Text>
            <Text className="text-white py-2">
              Share with your friends and loved ones to come and play
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              className="border border-[#E4F1FA] self-baseline p-3 rounded-[20px] mt-4"
            >
              <Text className="text-white">Invite Friends</Text>
            </TouchableOpacity>
          </View>
          <ShareBig style={{ flex: 1 }} />
        </View>
      </ScrollView>
    </View>
  );
}

interface GamersProps {
  name: string;
  price: string;
  image?: ImageSourcePropType | undefined;
  background: string;
}

const TopGamer: React.FC<GamersProps> = (props) => (
  <TouchableOpacity className="items-center gap-2">
    <View
      style={{ backgroundColor: props.background }}
      className={`rounded-full w-[65px] h-[65px] flex items-center justify-center`}
    >
      <Image source={props.image} />
    </View>
    <Text className="font-bold">{props.name}</Text>
    <Text className="text-[##2364AA]">{props.price}</Text>
  </TouchableOpacity>
);

const topGamers: GamersProps[] = [
  {
    name: "Joe",
    price: "₦5,000",
    background: "#F2F2F2",
    image: avatar2,
  },
  {
    name: "Sarah",
    price: "₦5,000",
    background: "#AFF0FF",
    image: avatar3,
  },
  {
    name: "Hanax",
    price: "₦5,000",
    background: "#C4FBD2",
    image: avatar4,
  },
  {
    name: "Inioluwa",
    price: "₦5,000",
    background: "#F2F2F2",
    image: avatar5,
  },
  {
    name: "Liz",
    price: "₦5,000",
    background: "#F2F2F2",
    image: avatar6,
  },
];
