import React from 'react';
import { render } from '@testing-library/react-native';
import Modal from '../app/modal';


describe('Index Component', () => {
  it('debería renderizar correctamente los elementos', () => {
    const { getByTestId } = render(<Modal />);
    const searchList = getByTestId("search-list");

    expect(searchList).toBeDefined();
  });
});
