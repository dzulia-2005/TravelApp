import { configureStore } from '@reduxjs/toolkit';
import {cardApi} from "../features/card/cardApi.ts";
import {authApi} from "../features/auth/authApi.ts";
import {commentApi} from "../features/comment/commentApi.ts";
import authReducer from "../features/auth/authSlices.ts"
import {weatherApi} from "../features/weather/weatherApi.ts";

export const store = configureStore({
    reducer:{
        [cardApi.reducerPath] : cardApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
        [commentApi.reducerPath] : commentApi.reducer,
        [weatherApi.reducerPath] : weatherApi.reducer,
        auth:authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(cardApi.middleware)
            .concat(authApi.middleware)
            .concat(commentApi.middleware)
            .concat(weatherApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
