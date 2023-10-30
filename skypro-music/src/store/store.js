import {configureStore} from '@reduxjs/toolkit'
import audioplayerReducer from './audioplayer/reducer'

export const store = configureStore({
    reducer: {
        audioplayer: audioplayerReducer
    }
})