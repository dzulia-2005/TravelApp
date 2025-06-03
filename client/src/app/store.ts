import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth//authSlices';
import cardReducer from '../features/card/cardSlices';

export const store = configureStore({
    reducer:{
        auth : authReducer,
        cards : cardReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
