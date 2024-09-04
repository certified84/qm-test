import { verifyInstallation } from "nativewind";
import { Text, View } from "react-native";
import "../global.css";

export default function Index() {

  verifyInstallation();

  return (
    <View className="flex-1 bg-red-600">
      <Text className="text-green-500 bg-purple-50">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
