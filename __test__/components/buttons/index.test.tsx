import React from 'react';
import { render } from '@testing-library/react-native';
import { ButtonFactory } from '@/components/buttons';
import { typeButtons } from '@/types/components/buttons';

describe('ButtonFactory Component', () => {
  it('debería renderizar correctamente el botón QR', () => {
    const { getByTestId } = render(
      <ButtonFactory typeButton={typeButtons.qr} />
    );
    const qrButton = getByTestId("qr-button");
    expect(qrButton).toBeDefined();
  });

  it('debería renderizar correctamente el botón Back', () => {
    const { getByTestId } = render(
      <ButtonFactory typeButton={typeButtons.back} />
    );
    const backButton = getByTestId("back-modal");
    expect(backButton).toBeDefined();
  });

  it('debería renderizar correctamente el botón Custom', () => {
    const { getByTestId } = render(
      <ButtonFactory typeButton={typeButtons.bottom} />
    );
    const customButton = getByTestId("custom-button");
    expect(customButton).toBeDefined();
  });

  it('debería renderizar correctamente el botón Modal', () => {
    const { getByTestId } = render(
      <ButtonFactory typeButton={typeButtons.modal} />
    );
    const modalButton = getByTestId("modal-button");
    expect(modalButton).toBeDefined();
  });

  it('debería renderizar correctamente el botón Input', () => {
    const { getByTestId } = render(
      <ButtonFactory typeButton={typeButtons.input} />
    );
    const inputButton = getByTestId("input-button");
    expect(inputButton).toBeDefined();
  });
});