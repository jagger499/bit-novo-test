import React from 'react';
import { render } from '@testing-library/react-native';
import { CurrencyInput } from '@/components/input/currencyInput';

describe('CurrencyInput Component', () => {
  it('debería renderizar correctamente', () => {
    const { getByTestId } = render(
      <CurrencyInput />
    );
    
    const currencyInputContainer = getByTestId("currency-input-container");
    const currencyInput = getByTestId("currency-text-input");
    expect(currencyInputContainer).toBeDefined();
    expect(currencyInput).toBeDefined();
  });
});