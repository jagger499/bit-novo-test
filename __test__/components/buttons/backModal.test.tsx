import React from 'react';
import { render } from '@testing-library/react-native';
import { BackModalArrow } from '@/components/buttons/backModal';

describe('BackModalArrow Component', () => {
  it('debería renderizar correctamente los elementos', () => {
    const { getByTestId } = render(<BackModalArrow />);
    
    const backLink = getByTestId("back-link");
    const backModal = getByTestId("back-modal");
    const backArrowImage = getByTestId("back-arrow-image");

    expect(backLink).toBeDefined();
    expect(backModal).toBeDefined();
    expect(backArrowImage).toBeDefined();
  });
});
