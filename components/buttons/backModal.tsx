import React from "react";
import { styles } from "@/styles/components/buttons/button";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { View, ViewProps } from "react-native";

export const BackModalArrow: React.FC<ViewProps> = (props) => {
  return (
    <Link href={"../"} testID="back-link">
      <View {...props} style={styles.backModal} testID="back-modal">
        <Image
          source={require("@/assets/svg/BackArrow.svg")}
          style={{ width: 15, height: 10 }}
          testID="back-arrow-image"
        />
      </View>
    </Link>
  );
};
