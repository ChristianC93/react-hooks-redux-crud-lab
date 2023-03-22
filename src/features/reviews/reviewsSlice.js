import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        entities: []
    },
    reducers: {
        reviewAdded(state, action) {
            const newReview = action.payload
            state.entities.push({
                id: uuid(),
                restaurantId: newReview.restaurantId,
                comment: newReview.comment
            })
        },

        reviewRemoved(state, action) {
            const index = state.entities.findIndex((review) => review.id === action.payload);
            console.log(index)
            state.entities.splice(index, 1)
        }
    }
});

export const { reviewAdded, reviewRemoved } = reviewsSlice.actions;

export default reviewsSlice.reducer;