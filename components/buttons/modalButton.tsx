import React from "react";
import { Text, View, ViewProps } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { generalStyles } from "@/styles/general";
import { styles as currencyStyles } from "@/styles/components/buttons/currencyModal";
import { CustomButtonProps } from "@/types/components/buttons";
import { styles } from "@/styles/components/buttons/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const ModalButton: React.FC<ViewProps & CustomButtonProps> = ({
  modal,
  ...props
}) => {
  const currency = useSelector((state: RootState) => state.payment.currency);
  const country = useSelector((state: RootState) => state.country);
  const isPhone = modal === "phone";
  const textStyles = isPhone
    ? styles.phoneModalText
    : currencyStyles.currencyModalButtonText;
  return (
    <Link
      href={{ pathname: "/modal", params: { type: modal } }}
      style={!isPhone ? currencyStyles.currencyModalButtton : {}}
    >
      <View
        {...props}
        style={[generalStyles.flexCenter, generalStyles.flexRow]}
      >
        <Text style={textStyles}>
          {isPhone && `${country?.title}`}
          {!isPhone && `${currency?.subTitle}`}
        </Text>
        <Image
          source={require("@/assets/svg/DownArrow.svg")}
          style={{ width: 12, height: 6 }}
        />
      </View>
    </Link>
  );
};
