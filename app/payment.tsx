import React, { useState } from "react";
import { Container } from "@/components/container";
import { Text, ToastAndroid, View } from "react-native";
import { Image } from "expo-image";
import { generalStyles } from "@/styles/general";
import { InputFactory } from "@/components/input";
import { CustomInputTypes } from "@/types/components/input";
import { ButtonFactory } from "@/components/buttons";
import { typeButtons } from "@/types/components/buttons";
import { styles } from "@/styles/app/currency";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useWebSocket } from "@/hooks/useWebsocket";
import { shareContent, shareViaEmail, shareViaWhatsApp } from "@/utils/share";
import { useLanguages } from "@/hooks/useLanguage";
import { router } from "expo-router";
import { HalfScreenModal } from "@/components/modal";
import { isValidEmail, isValidPhone } from "@/utils";

export default function Payment() {
  const [phone, onChangePhone] = useState("");
  const [mail, onChangeMail] = useState("");
  const [open, setOpen] = useState(false);
  const { t } = useLanguages();
  const url = useSelector((state: RootState) => state.url);
  const payment = useSelector((state: RootState) => state.payment);
  const countryCode = useSelector((state: RootState) => state.country?.title);
  const { total, currency } = payment;

  const handleShareEmail = async () => {
    if (!isValidEmail(mail)) {
      ToastAndroid.show(t('shareMailInvalid'), ToastAndroid.SHORT);
      return;
    }
    const res = await shareViaEmail(t, `${mail}`, `payment link: ${url}`);
    if (res) {
      setOpen(true);
    }
  };

  const handlelShareWap = async () => {
    if (!isValidPhone(phone)) {
      ToastAndroid.show(t('sharePhoneInvalid'), ToastAndroid.SHORT);
      return;
    }
    const res = await shareViaWhatsApp(t, `${countryCode}${phone}`, `${url}`);
    if (res) {
      setOpen(true);
    }
  };

  const handleShare = async () => {
    const res = await shareContent(`${url}`, "share payment");
    if (res) {
      setOpen(true);
    }
  };

  useWebSocket();

  return (
    <Container button testID="payment-screen">
      <HalfScreenModal open={open} setOpen={setOpen} />
      <View style={[generalStyles.flexCenter, styles.card]} testID="payment-info">
        <View style={generalStyles.flexRow}>
          <Image
            source={require("@/assets/svg/MoneyTime.svg")}
            style={{ width: 58, height: 58 }}
            testID="money-icon"
          />
          <View>
            <Text style={styles.text} testID="payment-solicitude">{t("paymentSolicitude")}</Text>
            <Text style={styles.currency} testID="payment-amount">
              {currency?.subTitle === "USD" && <Text>$ </Text>}
              {currency?.subTitle === "GBP" && <Text>£ </Text>}
              {total}
              {currency?.subTitle === "EUR" && <Text> €</Text>}
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 10 }} />
        <Text style={styles.text} testID="share-link">{t("paymentShareLink")}</Text>
      </View>
      <View style={{ marginBottom: 20 }} />
      <View style={styles.form}>
        <InputFactory
          qr
          editable={false}
          icon={require("@/assets/svg/Link.svg")}
          inputType={CustomInputTypes.Text}
          placeholder={`${url}`}
          testID="url-input"
        />
        <InputFactory
          value={mail}
          onChangeText={onChangeMail}
          onPressButton={handleShareEmail}
          icon={require("@/assets/svg/Sms.svg")}
          inputType={CustomInputTypes.Text}
          placeholder={t("paymentMailPlaceholder")}
          testID="email-input"
        />
        <InputFactory
          phone
          value={phone}
          onChangeText={onChangePhone}
          keyboardType="numeric"
          icon={require("@/assets/svg/Whatsapp.svg")}
          inputType={CustomInputTypes.Text}
          placeholder={t("paymentWapPlaceholder")}
          onPressButton={handlelShareWap}
          testID="phone-input"
        />
        <InputFactory
          editable={false}
          onPress={handleShare}
          icon={require("@/assets/svg/Export.svg")}
          inputType={CustomInputTypes.Text}
          placeholder={t("paymentSharePlaceholder")}
          testID="share-input"
        />
      </View>
      <View style={{ marginBottom: 20 }} />
      <ButtonFactory
        secondary
        onPress={() => router.replace("/")}
        icon={require("@/assets/svg/Wallet.svg")}
        title={t("paymentNewSolicitude")}
        typeButton={typeButtons.bottom}
        testID="new-solicitude-button"
      />
    </Container>
  );
}
