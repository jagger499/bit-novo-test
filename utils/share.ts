import { Linking } from "react-native";
import { Share } from "react-native";
import { ToastAndroid } from "react-native";

export const shareContent = (message: string, title: string): Promise<boolean> => {
  return Share.share({
    message: message,
    title: title,
  })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const shareViaWhatsApp = (t: Function, phoneNumber: string, url: string): Promise<boolean> => {
  const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(url)}`;

  return Linking.canOpenURL(whatsappUrl)
    .then((supported) => {
      if (!supported) {
        ToastAndroid.show(t('shareWapNotSupport'), ToastAndroid.SHORT);
        return false;
      }
      Linking.openURL(whatsappUrl);
      return true;
    })
    .catch((err) => {
      console.error("Se produjo un error", err);
      return false;
    });
};

export const shareViaEmail = (t: Function, email: string, body: string): Promise<boolean> => {
  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
    "payment link"
  )}&body=${encodeURIComponent(body)}`;

  return Linking.canOpenURL(emailUrl)
    .then((supported) => {
      if (!supported) {
        ToastAndroid.show(t('shareMailNotSupport'), ToastAndroid.SHORT);
        console.log(
          
        );
        return false;
      }
      return Linking.openURL(emailUrl).then(() => true);
    })
    .catch((err) => {
      console.error("Se produjo un error", err);
      return false;
    });
};
