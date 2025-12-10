import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
  return await response.json();
})

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    meals: [],
    state: null
  },
  reducers: {
    setMeals: (state, {name, payload}) => {
        state.meals = payload;
    },
    clearMeals: (state) => {
        state.meals = [];
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.meals = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message ?? 'Unknown Error'
      })}
})

export const mealsReducer = mealsSlice.reducer;
export const {setMeals, clearMeals} = mealsSlice.actions;
export const mealsSelector = (maxCount) => state => state.meals.meals.slice(0, maxCount).map(({meal}) => meal)
