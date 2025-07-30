import { Text, View } from "react-native";

import TestModule from 'test-module'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{TestModule.hello()}</Text>
    </View>
  );
}
