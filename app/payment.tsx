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
import { isValidEmail } from "@/utils";

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
    <Container button>
      <HalfScreenModal open={open} setOpen={setOpen} />
      <View style={[generalStyles.flexCenter, styles.card]}>
        <View style={generalStyles.flexRow}>
          <Image
            source={require("@/assets/svg/MoneyTime.svg")}
            style={{ width: 58, height: 58 }}
          />
          <View>
            <Text style={styles.text}>{t("paymentSolicitude")}</Text>
            <Text style={styles.currency}>
              {currency?.subTitle === "USD" && <Text>$ </Text>}
              {currency?.subTitle === "GBP" && <Text>£ </Text>}
              {total}
              {currency?.subTitle === "EUR" && <Text> €</Text>}
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 10 }} />
        <Text style={styles.text}>{t("paymentShareLink")}</Text>
      </View>
      <View style={{ marginBottom: 20 }} />
      <View style={styles.form}>
        <InputFactory
          qr
          editable={false}
          icon={require("@/assets/svg/Link.svg")}
          inputType={CustomInputTypes.Text}
          placeholder={`${url}`}
        />
        <InputFactory
          value={mail}
          onChangeText={onChangeMail}
          onPressButton={handleShareEmail}
          icon={require("@/assets/svg/Sms.svg")}
          inputType={CustomInputTypes.Text}
          placeholder={t("paymentMailPlaceholder")}
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
        />
        <InputFactory
          editable={false}
          onPress={handleShare}
          icon={require("@/assets/svg/Export.svg")}
          inputType={CustomInputTypes.Text}
          placeholder={t("paymentSharePlaceholder")}
        />
      </View>
      <View style={{ marginBottom: 20 }} />
      <ButtonFactory
        secondary
        onPress={() => router.replace("/")}
        icon={require("@/assets/svg/Wallet.svg")}
        title={t("paymentNewSolicitude")}
        typeButton={typeButtons.bottom}
      />
    </Container>
  );
}
