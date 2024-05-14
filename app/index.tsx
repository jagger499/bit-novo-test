import React, { useState } from "react";
import { View } from "react-native";
import { CustomInputTypes } from "@/types/components/input";
import { Container } from "@/components/container";
import { ButtonFactory } from "@/components/buttons";
import { typeButtons } from "@/types/components/buttons";
import { InputFactory } from "@/components/input";
import { router } from "expo-router";
import { createOrder } from "@/api/order";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addPaymentInfo, setIdentifier, setUrl } from "@/redux/actions/paymentActions";
import { useLanguages } from "@/hooks/useLanguage";
import {  ToastAndroid } from 'react-native';
import { CustomError } from "@/types/api";

export default function Index() {
  const [description, onChangeDescription] = useState("");
  const [amount, onChangeAmount] = useState("");
  const [load, setLoad] = useState(false);
  const currency = useSelector((state: RootState) => state.payment.currency);
  const dispatch = useDispatch();
  const {t} = useLanguages();

  const handleContinue = async () => {
    try {
      setLoad(true);
      const price = parseFloat(amount) * (currency?.exchangeRate || 1);
      const response = await createOrder({
        amount: Math.ceil(price * 100) / 100,
        description,
        fiat: currency?.subTitle || "USD",
      });
      dispatch(addPaymentInfo({ total: amount, description, currency }));
      if (response?.web_url && response?.identifier) {
        dispatch(setIdentifier({ identifier: response?.identifier }))
        dispatch(setUrl({ url: response?.web_url }));
        router.push("/payment");
      }
    } catch (error) {
      const { response = {} } = error  as CustomError;
      const { data = {} } = response;
      const { detail = "" } = data;
      if (detail) {
        ToastAndroid.show(`${detail} `, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(`${t('requestError')} `, ToastAndroid.SHORT);
      }
    } finally {
      setLoad(false);
    }
  };

  return (
    <Container center button>
      <InputFactory
        testID="currencyInput"
        editable={!load}
        multiline
        clearTextOnFocus
        numberOfLines={3}
        onChangeText={onChangeAmount}
        value={amount}
        inputMode="numeric"
        keyboardType={"numeric"}
        textAlign="center"
        inputType={CustomInputTypes.Currency}
        placeholder="0.00 "
      />
      <View style={{ marginBottom: 10 }} />
      <InputFactory
        testID="descriptionInput"
        editable={!load}
        multiline
        clearTextOnFocus
        maxLength={140}
        label={t("descriptionLabel")}
        inputType={CustomInputTypes.Text}
        onChangeText={onChangeDescription}
        value={description}
        placeholder={t("descriptionPlaceholder")}
      />
      <View style={{ marginBottom: 30 }} />
      <ButtonFactory
        testID="custom-button"
        title={t("continue")}
        onPress={handleContinue}
        typeButton={typeButtons.bottom}
        disabled={amount.length === 0 || description.length === 0 || load}
      />
    </Container>
  );
}
