import React from "react";
import { render } from "@testing-library/react-native";
import Payment from "../app/payment";

jest.mock("@/hooks/useWebsocket", () => ({
  useWebSocket: jest.fn(() => ({})),
}));

describe("Payment Component", () => {
  it("debería renderizar correctamente los elementos", () => {
    const { getByTestId } = render(<Payment />);

    const paymentScreen = getByTestId("payment-screen");
    const paymentInfo = getByTestId("payment-info");
    const moneyIcon = getByTestId("money-icon");
    const paymentSolicitudeText = getByTestId("payment-solicitude");
    const paymentAmountText = getByTestId("payment-amount");
    const shareLinkText = getByTestId("share-link");
    const urlInput = getByTestId("url-input");
    const emailInput = getByTestId("email-input");
    const phoneInput = getByTestId("phone-input");
    const shareInput = getByTestId("share-input");
    const newSolicitudeButton = getByTestId("custom-button");

    expect(paymentScreen).toBeDefined();
    expect(paymentInfo).toBeDefined();
    expect(moneyIcon).toBeDefined();
    expect(paymentSolicitudeText).toBeDefined();
    expect(paymentAmountText).toBeDefined();
    expect(shareLinkText).toBeDefined();
    expect(urlInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(phoneInput).toBeDefined();
    expect(shareInput).toBeDefined();
    expect(newSolicitudeButton).toBeDefined();
  });
});
