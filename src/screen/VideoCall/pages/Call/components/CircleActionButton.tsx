import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";

interface CircleActionButtonProps {
  src: any;
  alt?: string;
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
}

const CircleActionButton: React.FC<CircleActionButtonProps> = ({
  src,
  onClick,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onClick} style={[styles.button, style]}>
      <Image source={src} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default CircleActionButton;
