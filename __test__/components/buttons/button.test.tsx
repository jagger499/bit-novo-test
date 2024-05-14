import React from 'react';
import { render } from '@testing-library/react-native';
import { CustomButton } from '@/components/buttons/button'; 

describe('CustomButton Component', () => {
  it('debería renderizar correctamente', () => {
    const { getByTestId } = render(
      <CustomButton title="Custom Button" />
    );
    const customButton = getByTestId("custom-button");
    expect(customButton).toBeDefined();
  });
});