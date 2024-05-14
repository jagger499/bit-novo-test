import React from "react";
import { Container } from "@/components/container";
import { Text, View } from "react-native";
import { generalStyles } from "@/styles/general";
import { QrCodeSvg } from "react-native-qr-svg";
import { Image } from "expo-image";
import { styles } from "@/styles/app/qrModal";
import { width } from "@/styles/theme";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useLanguages } from "@/hooks/useLanguage";

export default function ModalQr() {
  const { t } = useLanguages();
  const url = useSelector((state: RootState) => state.url);
  const payment = useSelector((state: RootState) => state.payment);
  const { total, currency } = payment;
  return (
    <Container qr>
      <View style={[generalStyles.flexRow, styles.backgroundText]} testID="warning-container">
        <Image
          testID="info-image"
          source={require("@/assets/svg/Info.svg")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={styles.warningText}>
          {t("qrWarningText")}
        </Text>
      </View>
      <View style={{ marginBottom: 20 }} />
      <View style={[styles.qrContainer, generalStyles.flexCenter]} testID="qr-code-container">
        <QrCodeSvg
          value={`${url}`}
          contentCells={8}
          contentStyle={generalStyles.flexCenter}
          content={
            <Image
              style={{ width: 100, height: 40 }}
              source={require("@/assets/images/B-pay.png")}
            />
          }
          frameSize={width - 80}
        />
      </View>
      <View style={{ marginBottom: 20 }} />
      <View style={generalStyles.flexCenter} testID="price-container">
        <Text style={styles.qrPrice} testID="qr-price">
          {" "}
          {currency?.subTitle === "USD" && <Text>$ </Text>}
          {currency?.subTitle === "GBP" && <Text>£ </Text>}
          {total}
          {currency?.subTitle === "EUR" && <Text> €</Text>}
        </Text>
        <View style={{ marginBottom: 10 }} />
        <Text style={styles.qrText} testID="update-text">
          {t("qrUpdateText")}
        </Text>
      </View>
    </Container>
  );
}
