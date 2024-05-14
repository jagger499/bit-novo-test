import React from "react";
import { TextInputProps } from "react-native";
import { CustomInputProps, CustomInputTypes } from "@/types/components/input";
import { CurrencyInput } from "./currencyInput";
import { CustomTextInput } from "./textInput";

export const InputFactory: React.FC<CustomInputProps & TextInputProps> = ({
  inputType,
  ...props
}) => {
  if (inputType === CustomInputTypes.Currency) {
    return <CurrencyInput {...props} />;
  }
  if (inputType === CustomInputTypes.Text) {
    return <CustomTextInput testID="text-input" {...props} />;
  }
  return <></>;
};
