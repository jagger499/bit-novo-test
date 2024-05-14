import { ImageSourcePropType } from "react-native";

export type ModalTypes = 'currency' | 'phone';

export interface CustomButtonProps {
  bottom?: boolean;
  disabled?: boolean;
  title?: string;
  secondary?: boolean;
  icon?: ImageSourcePropType;
  modal?: ModalTypes;
}

export enum typeButtons {
  back,
  bottom,
  modal,
  qr,
  input
}

export interface ButtonFactoryProps {
  typeButton: typeButtons;
}
