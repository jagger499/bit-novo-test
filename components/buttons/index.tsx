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
    return <QRButton {...props} testID="qr-button" />;
  }
  if (typeButton === typeButtons.back) {
    return <BackModalArrow {...props} testID="back-button" />;
  }
  if (typeButton === typeButtons.bottom) {
    return <CustomButton {...props} testID="custom-button" />;
  }
  if (typeButton === typeButtons.modal) {
    return <ModalButton {...props} testID="modal-button" />;
  }
  if (typeButton === typeButtons.input) {
    return <InputButton {...props} testID="input-button" />;
  }
  return <></>;
};