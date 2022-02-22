import React, { useEffect, useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { HeaderButtons } from "react-navigation-header-buttons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { saveData } from "../services/auth";

const MAIN_URL = "http://localhost"; // TODO: move to config
export const SignInScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderButtons>
        <Ionicons onPress={() => navigation.navigate("Food Market")} name="chevron-back" color="white" size={25} />
      </HeaderButtons>,
    });
  }, []);
  const [data, setData] = useState({
    nickName: null,
    email: null,
    password: null,
  });

  const onChangeNickname = (val) => {
    console.log("VAL", val);
    setData((preState) => ({
      ...preState,
      nickName: val,
    }));
  };
  const onChangeEmail = (val) => {
    console.log("VAL", val);
    setData((preState) => ({
      ...preState,
      email: val,
    }));
  };
  const onChangePassword = (val) => {
    console.log("VAL", val);
    setData((preState) => ({
      ...preState,
      password: val,
    }));
  };

  // useEffect(() => {
  //   getNickname();
  // }, []);

  const handleSignIn = () => {
    // if (!data.nickName || !data.password || !data.email) {
    //   return;
    // }
    axios.post(MAIN_URL + "/signin", {
      nickname: data.nickName,
      email: data.email,
      password: data.password,
    }).then(result => {
      const { email, password, nickname } = result.data;
      if (nickname.length !== 0) {
        console.log('WWWnickname', nickname)
        saveData(email, password, nickname)
          .then(() => navigation.navigate("Home", { data }));
      }
      console.log("SignInresult", result);
    }).catch(error => {
      error.message;
    });
  };
  //
  // const getNickname = () => {
  //   AsyncStorage.getItem("@save_nickname")
  //     .then (nick => {
  //       if (nick !== null) {
  //         navigation.navigate("Home");
  //       }
  //     }).catch(e => e.message);
  // };

  return (
    <KeyboardAvoidingView style={{
      flex: 1,
    }}>
      <ScrollView style={styles.mainTextStyle}>
        <View style={styles.center}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={{ ...styles.title, ...styles.info }}>
            Log in with your account
          </Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNickname}
          value={data.nickName}
          placeholder="Nickname"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={data.email}
          placeholder="email"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={data.password}
          placeholder="password"
          keyboardType="numeric"
        />
        <Button
          title="SIGN IN"
          onPress={handleSignIn}
          buttonStyle={{ ...styles.button, ...styles.buttonSignUp }}
          titleStyle={styles.titleSignUp}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainTextStyle: {
    backgroundColor: "#d9bebe",
    flexDirection: "column",
    paddingHorizontal: 30,
    textAlign: "center",
    paddingVertical: 150,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(117,117,117,0.56)",
    padding: 10,
  },

  button: {
    marginTop: 30,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    opacity: 1,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonSignUp: {
    backgroundColor: "#ff9c9b",
  },
  titleSignUp: {
    color: "white",
  },
  title: {
    fontSize: 35,
    color: "#fff",
    textAlign: "center",
  },
  center: {
    paddingTop: 3,
  },
  info: {
    fontSize: 20,
    marginHorizontal: 20,
    margin: 20,
  },
});
