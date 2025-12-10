import { configureStore } from '@reduxjs/toolkit'
import { mealsReducer } from './mealSlice';
import { cartReducer } from './cartSlice';

export const store = configureStore(
    {
        reducer: {
            meals: mealsReducer,
            cart: cartReducer
        }
    }
)