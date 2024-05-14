import React from "react";
import { ContainerProps } from "@/types/components/container";
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  ViewProps,
} from "react-native";
import { styles } from "@/styles/components/container";
import { useKeyboardVisibility } from "@/hooks/useKeyboardVisibility";

export const Container: React.FC<ContainerProps & ViewProps> = ({
  children,
  center = false,
  button,
  modal,
  qr,
  ...props
}) => {
  const { isKeyboardVisible } = useKeyboardVisibility();
  const qrStyle = qr ? styles.qr : {};

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="padding" style={[{ flex: 1 }]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={[styles.container, qrStyle]}
          contentContainerStyle={[
            center && !isKeyboardVisible ? styles.centerContainer : {},
            button && !isKeyboardVisible ? { flex: 1 } : {},
            button ? styles.containerWidthButton : {},
            modal ? { flex: 1 } : {},
          ]}
          {...props}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
