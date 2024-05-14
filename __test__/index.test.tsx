import React from 'react';
import { render } from '@testing-library/react-native';
import Index from '../app/index';


describe('Index Component', () => {
  it('debería renderizar correctamente los elementos', () => {
    const { getByTestId } = render(<Index />);
    const inputDescription = getByTestId('descriptionInput');
    const inputAmount = getByTestId('currency-text-input');
    const buttonContinue = getByTestId('custom-button');

    expect(inputDescription).toBeDefined();
    expect(inputAmount).toBeDefined();
    expect(buttonContinue).toBeDefined();
  });
});
