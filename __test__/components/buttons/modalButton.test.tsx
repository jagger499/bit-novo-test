import React from 'react';
import { render } from '@testing-library/react-native';
import { ModalButton } from '@/components/buttons/modalButton';

describe('ModalButton Component', () => {
  it('debería renderizar correctamente el botón de teléfono', () => {
    const { getByTestId } = render(
      <ModalButton modal="phone" />
    );
    const phoneModalButton = getByTestId("phone-modal-button");
    expect(phoneModalButton).toBeDefined();
  });

  it('debería renderizar correctamente el botón de moneda', () => {
    const { getByTestId } = render(
      <ModalButton modal="currency" />
    );
    const currencyModalButton = getByTestId("currency-modal-button");
    expect(currencyModalButton).toBeDefined();
  });
});