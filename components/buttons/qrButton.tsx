import { styles } from "@/styles/components/buttons/button";
import { Image } from "expo-image";
import { TouchableHighlight } from "react-native";
import { router } from 'expo-router';

export const QRButton = () => {
  return (
    <TouchableHighlight onPress={() => router.push('/modal-qr')} style={styles.qrButton}>
      <Image
        style={{ width: 20, height: 20 }}
        source={require("@/assets/svg/scanBarcode.svg")}
      />
    </TouchableHighlight>
  );
};
