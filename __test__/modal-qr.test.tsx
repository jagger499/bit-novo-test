import React from "react";
import { render } from "@testing-library/react-native";
import Modal from "../app/modal-qr";


describe("Index Component", () => {
  it("debería renderizar correctamente los elementos", () => {
    const { getByTestId } = render(<Modal />);
    const warningContainer = getByTestId("warning-container");
    const infoImage = getByTestId("info-image");
    const qrCodeContainer = getByTestId("qr-code-container");
    const qrPrice = getByTestId("qr-price");
    const updateText = getByTestId("update-text");

    expect(warningContainer).toBeDefined();
    expect(infoImage).toBeDefined();
    expect(qrCodeContainer).toBeDefined();
    expect(qrPrice).toBeDefined();
    expect(updateText).toBeDefined();
  });
});
