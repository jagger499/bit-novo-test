import React from 'react';
import { render } from '@testing-library/react-native';
import { InputButton } from '@/components/buttons/inputButton';

describe('InputButton Component', () => {
  it('debería renderizar correctamente', () => {
    const { getByTestId } = render(
      <InputButton title="Input Button" />
    );
    const inputButton = getByTestId("input-button");
    expect(inputButton).toBeDefined();
  });
});