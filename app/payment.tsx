import React, { useState } from "react";
import { Container } from "@/components/container";
import { Text, View } from "react-native";
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

export default function Payment() {
  const [phone, onChangePhone] = useState('');
  const [mail, onChangeMail] = useState('');
  const url = useSelector((state: RootState) => state.url);
  const payment = useSelector((state: RootState) => state.payment);
  const countryCode = useSelector((state: RootState) => state.country?.title);
  const { total, currency } = payment;

  useWebSocket();

  return (
    <Container button>
      <View style={[generalStyles.flexCenter, styles.card]}>
        <View style={generalStyles.flexRow}>
          <Image
            source={require("@/assets/svg/MoneyTime.svg")}
            style={{ width: 58, height: 58 }}
          />
          <View>
            <Text style={styles.text}>Solicitud de pago</Text>
            <Text style={styles.currency}>
              {currency?.subTitle === "USD" && <Text>$ </Text>}
              {currency?.subTitle === "GBP" && <Text>£ </Text>}
              {total}
              {currency?.subTitle === "EUR" && <Text> €</Text>}
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 10 }} />
        <Text style={styles.text}>
          Comparte el enlace de pago con el cliente
        </Text>
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
          onPressButton={() =>
            shareViaEmail(`${mail}`, `payment link: ${url}`)
          }
          icon={require("@/assets/svg/Sms.svg")}
          inputType={CustomInputTypes.Text}
          placeholder={"Enviar por correo electrónico"}
        />
        <InputFactory
          phone
          value={phone}
          onChangeText={onChangePhone}
          keyboardType="numeric"
          icon={require("@/assets/svg/Whatsapp.svg")}
          inputType={CustomInputTypes.Text}
          placeholder={"Enviar a número de WhatsApp"}
          onPressButton={() =>
            shareViaWhatsApp(`${countryCode}${phone}`, `${url}`)
          }
        />
        <InputFactory
          editable={false}
          onPress={() => shareContent(`${url}`, 'share payment')}
          icon={require("@/assets/svg/Export.svg")}
          inputType={CustomInputTypes.Text}
          placeholder={"Compartir con otras aplicaciones"}
        />
      </View>
      <View style={{ marginBottom: 20 }} />
      <ButtonFactory
        secondary
        icon={require("@/assets/svg/Wallet.svg")}
        title="Nueva solicitud"
        typeButton={typeButtons.bottom}
      />
    </Container>
  );
}
