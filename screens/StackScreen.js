import React from "react";
import { StyleSheet, View, Text } from "react-native";

const StackScreen = () => {
  return (
    <View style={styles.container}>
      <Text>StackScreen</Text>
    </View>
  );
};

export default StackScreen;

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    alignItems:'center',
    marginTop: "20%",
  },
});
