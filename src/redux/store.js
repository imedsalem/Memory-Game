import { configureStore } from '@reduxjs/toolkit'

import memoryCardsSlice from './memoryCardsSlice';

export const store = configureStore({
    reducer: {
        memoryCards: memoryCardsSlice,
    },
});
