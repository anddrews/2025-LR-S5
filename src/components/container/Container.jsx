import { fetchPosts, setMeals as setMealsAction, clearMeals as clearMealsAction, mealsSelector } from '../../store/mealSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const mealsMock = [1, 2, 3, 4]

export const Container = () => {
    const meals = useSelector(mealsSelector(6));
    const dispatch = useDispatch();

    const setMeals = () => {
        dispatch(setMealsAction(mealsMock));
    }
    const clearMeals = () => {
        dispatch(clearMealsAction());
    }

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch, fetchPosts]);
    
    return (
    <div>
        <button onClick={setMeals}>Set Meals</button>
        <button onClick={clearMeals}>Clear Meals</button>
        {meals.length 
        ? meals.map(meal => (
            <div>{JSON.stringify(meal)}</div>
        ))
        : <h1>Empty meals</h1>}
    </div>   )
}
