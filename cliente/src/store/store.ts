import { configureStore } from '@reduxjs/toolkit'
import publicacionesSlice from '../slice/publicacionesSlice'

export const store = configureStore({
  reducer: {
    desahogate: publicacionesSlice,
  },
})

export type IRootState = ReturnType<typeof store.getState>