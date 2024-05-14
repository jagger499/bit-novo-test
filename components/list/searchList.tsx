import React, { useState } from "react";
import { InputFactory } from "../input";
import { CustomInputTypes } from "@/types/components/input";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { ListItem } from "./listItem";
import { normalizeString } from "@/utils";
import { SearchListProps } from "@/types/components/list";
import { useLanguages } from "@/hooks/useLanguage";

export const SearchList: React.FC<SearchListProps> = ({ value, onChangeValue, data }) => {
  const [search, setSearch] = useState("");
  const {t} = useLanguages();

  const filterDataByTitleAndSubTitle = (searchText: string) => {
    if (!searchText) return data;
    const normalizedSearch = normalizeString(searchText);
    return data.filter(
      (item) =>
        normalizeString(item.title).includes(normalizedSearch) ||
        normalizeString(item.subTitle).includes(normalizedSearch)
    );
  };

  return (
    <>
      <InputFactory
        inputType={CustomInputTypes.Text}
        placeholder={t('listSearch')}
        onChangeText={setSearch}
        value={search}
        icon={require("@/assets/svg/Search.svg")}
      />
      <View style={{ marginBottom: 20 }} />
      <FlashList
        renderItem={({ item }) => {
          const { title, subTitle, image } = item;
          return (
            <ListItem
              onPress={() => onChangeValue(item)}
              selected={value?.subTitle === subTitle}
              title={title}
              subTitle={subTitle}
              image={image}
            />
          );
        }}
        estimatedItemSize={70}
        data={filterDataByTitleAndSubTitle(search)}
      />
    </>
  );
};
