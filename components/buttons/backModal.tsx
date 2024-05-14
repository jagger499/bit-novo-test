import React from "react";
import { styles } from "@/styles/components/buttons/button";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { View } from "react-native";

export const BackModalArrow: React.FC = () => {
  return (
    <Link href={"../"}>
      <View style={styles.backModal}>
        <Image
          source={require("@/assets/svg/BackArrow.svg")}
          style={{ width: 15, height: 10 }}
        />
      </View>
    </Link>
  );
};
