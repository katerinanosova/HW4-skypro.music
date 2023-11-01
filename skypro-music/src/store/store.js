import {configureStore} from '@reduxjs/toolkit'
import audioplayerReducer from './audioplayer/reducer'
import { tracksApi } from '../API/api-tracks'

export const store = configureStore({
    reducer: {
        audioplayer: audioplayerReducer,
        [tracksApi.reducerPath]: tracksApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tracksApi.middleware)
})

