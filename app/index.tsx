import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer Modal</Text>

      {/* ✅ Just use TimerShape, don't wrap another TimerProvider */}


      <Text style={styles.title}>Welcome to Boostelo!</Text>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{ alignContent: "flex-end"}
});

export default HomeScreen;
