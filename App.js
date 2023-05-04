import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [result, setresult] = useState("");
  const Addition = () => {
    setresult(parseInt(input1) + parseInt(input2));
  };
  const Subtraction = () => {
    setresult(parseInt(input1) - parseInt(input2));
  };
  const Multiplication = () => {
    setresult(parseInt(input1) * parseInt(input2));
  };
  const Division = () => {
    setresult(parseInt(input1) / parseInt(input2));
  };

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        style={{ width: "60%", height: 50, borderWidth: 1 }}
        onChangeText={setinput1}
      ></TextInput>
      <TextInput
        keyboardType="numeric"
        style={{ width: "60%", height: 50, borderWidth: 1, marginVertical: 10 }}
        onChangeText={setinput2}
      ></TextInput>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={Addition}>
          <Text style={{ marginHorizontal: 10, fontSize: 30 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Subtraction}>
          <Text style={{ marginHorizontal: 10, fontSize: 30 }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Multiplication}>
          <Text style={{ marginHorizontal: 10, fontSize: 30 }}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Division}>
          <Text style={{ marginHorizontal: 10, fontSize: 30 }}>/</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginVertical: 10, fontSize: 20 }}>{result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",
  },
});
