import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MainProductList } from "./components/MainProductList";
import axios from "axios";

const STORAGE_KEY = "@save_nickname";
const MAIN_URL = "http://localhost"; // TODO: move to config

export const HomeScreen = ({ navigation }) => {
  const [nickName, setNickname] = useState();
  const [categories, setCategories] = useState();
  console.log("EEEcategories", categories);
  useEffect(() => {
    getNickname();
  }, []);
  useEffect(() => {
    axios.post(MAIN_URL + "/pastille")
      .then(res => {
        const data = res.data;
        setCategories(data);
      }).catch(error => error);
  }, []);

  const getNickname = () => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(nick => {
        if (nick !== null) {
          setNickname(nick);
          navigation.navigate("Home");
        }
      }).catch(e => e.message);
  };
  const userLogOut = () => {
    // logOut()
    navigation.navigate("SignIn");
  };

  return (
    // <View style={{paddingVertical: 100, alignItems: 'center'}}>
    //   <Text>Добро пожаловать {nickName}</Text>
    //   <Button
    //     title="Log Out"
    //     onPress={userLogOut}
    //     buttonStyle={{ ...styles.button, ...styles.buttonLogOut }}
    //     titleStyle={styles.titleLogOut}
    //   />
    //
    // </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          console.log("AAAitem", item);
          return <MainProductList item={item} />;
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    opacity: 1,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonLogOut: {
    backgroundColor: "#ff9c9b",
  },
  titleLogOut: {
    color: "white",
  },
});
