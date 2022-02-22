import React from "react";
import { View, StyleSheet, Text, Platform, TouchableOpacity, Image, Button } from "react-native";
import { mainColors } from "../../assets/colors";

export const MainProductList = ({ item }) => {
  return (
    <View style={styles.mainContainer} key={item.id}>
      <TouchableOpacity style={styles.rowContainer}>
        <Image style={styles.imageContainer}
               source={{ uri: "https://www.recept.ua/files/uploads/rec_img/pastila-v-suschilke.jpg" }} />
        <View style={styles.textContainer}>
          <Text style={{fontWeight: '600'}}>{item.name}</Text>
          <Text style={{color: mainColors.price, fontWeight: '600'}}>{item.price} грн</Text>
        </View>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    marginTop: 5,
    // paddingTop: 10,
    paddingHorizontal: 10,
  },
  rowContainer: {
    paddingVertical: 5,
    borderColor: "green",
    borderWidth: 1,
    flexDirection: "row",
    backgroundColor: "rgb(255,255,255)",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: 'space-around',
    borderColor: "orange",
    borderWidth: 1,
    width: 150,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  imageContainer: {
    height: 80,
    width: 80,
  },
});
