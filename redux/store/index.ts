import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/paymentReducer';

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;