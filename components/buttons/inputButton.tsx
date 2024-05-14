import { styles } from "@/styles/components/buttons/button";
import { CustomButtonProps } from "@/types/components/buttons";
import React from "react";
import {
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";

export const InputButton: React.FC<
  CustomButtonProps & TouchableHighlightProps
> = ({ title, ...props }) => {
  return (
    <TouchableHighlight style={styles.inputButton} {...props}>
      <Text style={styles.inputButtonText}>{title}</Text>
    </TouchableHighlight>
  );
};
