import { configureStore } from '@reduxjs/toolkit';
import { paymentReducer } from '../reducers/paymentReducer';

export const store = configureStore({
    reducer: paymentReducer
})

export type RootState = ReturnType<typeof paymentReducer>;