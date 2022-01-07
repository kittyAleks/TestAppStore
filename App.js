import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "600",
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: "400",
//   },
//   highlight: {
//     fontWeight: "700",
//   },
// });

