import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/user";

const CreateUserForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    try {
      await axios.post(API_BASE_URL, { username, email, password });
      Alert.alert("Success", "User created!");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Submit" onPress={handleSubmit} color="yellow" />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 16,
    borderStyle: "solid",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export default CreateUserForm;
