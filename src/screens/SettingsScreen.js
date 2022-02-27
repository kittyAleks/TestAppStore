import React from 'react';
import { Text, View, Button, StyleSheet } from "react-native";

export const SettingsScreen = ({navigation}) => {
  const userLogOut = () => {
    // logOut()
    navigation.navigate("SignIn");
  };
  return (
    <View style={{paddingVertical: 100, alignItems: 'center'}}>
      <Button
        title="Log Out"
        onPress={userLogOut}
        buttonStyle={{ ...styles.button, ...styles.buttonLogOut }}
        titleStyle={styles.titleLogOut}
      />

    </View>
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

