import React from "react";
import { Text, View, ViewProps } from "react-native";
import { generalStyles } from "@/styles/general";
import { width } from "@/styles/theme";
import { HeaderProps } from "@/types/components/header";


export const Header: React.FC<HeaderProps & ViewProps> = ({
  title,
  modal,
  ...props
}) => {
  const padding = modal ? 60 : 30;

  return (
    <View style={{ width: width - padding }} {...props}>
      <Text style={generalStyles.h1}>{title}</Text>
    </View>
  );
};
