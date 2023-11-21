import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

 const styles = StyleSheet.create({
   container: {
    fontSize:30,
    alignItems:'center',
    marginTop:"20%"
   },
 });
