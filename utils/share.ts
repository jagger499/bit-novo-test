import { Linking } from "react-native";
import { Share } from 'react-native';

export const shareContent = (message: string, title: string) => {
  Share.share({
    message: message,
    title: title
  })
};

export const shareViaWhatsApp = (phoneNumber: string, url: string) => {
  const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${url}`;

  Linking.canOpenURL(whatsappUrl)
    .then((supported) => {
      if (!supported) {
        console.log("WhatsApp no está instalado en este dispositivo.");
        return;
      }
      return Linking.openURL(whatsappUrl);
    })
    .catch((err) => console.error("An error occurred", err));
};

export const shareViaEmail = (email: string, body: string) => {
    const emailUrl = `mailto:${email}?subject=${encodeURIComponent('payment link')}&body=${encodeURIComponent(body)}`;
  
    Linking.canOpenURL(emailUrl)
      .then((supported) => {
        if (!supported) {
          console.log("El cliente de correo electrónico no está disponible en este dispositivo.");
          return;
        }
        return Linking.openURL(emailUrl);
      })
      .catch((err) => console.error("Se produjo un error", err));
  };