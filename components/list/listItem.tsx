import React from "react";
import { styles } from "@/styles/components/list/listItem";
import { generalStyles } from "@/styles/general";
import { Text, View, TouchableHighlight, TouchableHighlightProps } from "react-native";
import { Image } from "expo-image";
import { ListItemProps } from "@/types/components/list";

export const ListItem: React.FC<ListItemProps & TouchableHighlightProps> = ({
  image,
  title,
  selected,
  subTitle,
  onPress,
}) => {
  const selectedStyles = selected ? styles.itemContainerSelected : {};
  const rightIcon = selected
    ? require("@/assets/svg/Tick.svg")
    : require("@/assets/svg/ArrowRight.svg");

  return (
    <TouchableHighlight
      onPress={onPress}
      style={[generalStyles.flexRow, styles.itemContainer, selectedStyles]}
    >
      <>
        <View style={[generalStyles.flexRow, generalStyles.flexCenter]}>
          <Image source={image} style={{ width: 32, height: 32 }} />
          <View style={generalStyles.flexColumn}>
            <Text style={styles.itemText}>{title}</Text>
            <Text style={styles.itemSubText}>{subTitle}</Text>
          </View>
        </View>
        <Image source={rightIcon} style={{ width: 15, height: 15 }} />
      </>
    </TouchableHighlight>
  );
};
