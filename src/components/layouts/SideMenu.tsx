import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SideMenu: React.FC<{
  menuOpen: boolean;
  toggleMenu: () => void;
}> = () => {
  return (
    <View>
      <Text>SideMenu</Text>
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({});
