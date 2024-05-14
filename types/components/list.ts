import { ImageSourcePropType } from "react-native";

export interface ListItemProps {
  selected?: boolean;
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
}

export interface SearchListItem {
  key: string;
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  exchangeRate?: number;
}

export interface SearchListProps {
  data: ListItemProps[];
  value: SearchListItem | undefined;
  onChangeValue: (item: any) => void;
}
