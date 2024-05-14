import React, { useState } from "react";
import { View, Modal, Text } from "react-native";
import { BlurView } from "expo-blur";
import { ButtonFactory } from "./buttons";
import { typeButtons } from "@/types/components/buttons";
import { Image } from "expo-image";
import { styles } from "@/styles/components/modal";
import { useLanguages } from "@/hooks/useLanguage";
import { ModalSuccessProps } from "@/types/components/modal";

export const HalfScreenModal: React.FC<ModalSuccessProps> = ({
    open,
    setOpen,
}) => {
  const { t } = useLanguages();

  return (
    <Modal
      testID="modal"
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => setOpen(false)}
    >
      <BlurView style={styles.blurContainer} intensity={80}>
        <View style={styles.modalContent}>
          <Image
            source={require("@/assets/svg/Success.svg")}
            style={{ width: 80, height: 80 }}
          />
          <Text style={styles.title}>{t("successModalTitle")}</Text>
          <Text style={styles.text}>{t("successModalSubTitle")}</Text>
          <View style={styles.buttonContainer}>
            <ButtonFactory
              typeButton={typeButtons.bottom}
              title={t("successModalButton")}
              onPress={() => setOpen(false)}
            />
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};
