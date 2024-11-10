import { createSlice } from "@reduxjs/toolkit";

export const giftsSlice = createSlice({
    name: 'gifts',
    initialState: {
        selectedCategory: 'GIFTS FOR HER'
    }, 
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.gifts.selectedCategory;
export const { filterCategory } = giftsSlice.actions; 
export default giftsSlice.reducer;
