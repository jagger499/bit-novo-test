import React from "react";
import {
  ButtonFactoryProps,
  CustomButtonProps,
  typeButtons,
} from "@/types/components/buttons";
import { TouchableHighlightProps, ViewProps } from "react-native";
import { BackModalArrow } from "./backModal";
import { CustomButton } from "./button";
import { QRButton } from "./qrButton";
import { ModalButton } from "./modalButton";
import { InputButton } from "./inputButton";

export const ButtonFactory: React.FC<
  CustomButtonProps & ViewProps & ButtonFactoryProps & TouchableHighlightProps
> = ({ typeButton, ...props }) => {
  if (typeButton === typeButtons.qr) {
    return <QRButton {...props} />
  }
  if (typeButton === typeButtons.back) {
    return <BackModalArrow {...props} />;
  }
  if (typeButton === typeButtons.bottom) {
    return <CustomButton {...props} />;
  }
  if (typeButton === typeButtons.modal) {
    return <ModalButton {...props} />;
  }
  if (typeButton === typeButtons.input) {
    return <InputButton {...props} />
  }
  return <></>;
};
