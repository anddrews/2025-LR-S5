import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: {}
  },
  reducers: {
    setMeals: (state, {name, payload}) => {
        state.meals = payload;
    },
    clearMeals: (state) => {
        state.meals = [];
    }
  }
})

export const cartReducer = cartSlice.reducer;
export const {setMeals, clearMeals} = cartSlice.actions;
