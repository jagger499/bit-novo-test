import React from 'react';
import { render } from '@testing-library/react-native';
import { InputFactory } from '@/components/input';
import { CustomInputTypes } from '@/types/components/input';

describe('InputFactory Component', () => {
  it('debería renderizar correctamente el input de tipo Currency', () => {
    const { getByTestId } = render(
      <InputFactory inputType={CustomInputTypes.Currency} />
    );
    const currencyInput = getByTestId("currency-text-input");
    expect(currencyInput).toBeDefined();
  });

  it('debería renderizar correctamente el input de tipo Text', () => {
    const { getByTestId } = render(
      <InputFactory inputType={CustomInputTypes.Text} />
    );
    const textInput = getByTestId("text-input");
    expect(textInput).toBeDefined();
  });
});