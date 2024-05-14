import { GestureResponderEvent, ImageSourcePropType } from "react-native";

export enum CustomInputTypes {
  Currency,
  Text,
}

export interface CustomInputProps {
  inputType?: CustomInputTypes;
  label?: string;
  icon?: ImageSourcePropType;
  qr?: boolean;
  phone?: boolean;
  onPressButton?: (event: GestureResponderEvent) => void;
}
