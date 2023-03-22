import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { reviewAdded, reviewRemoved } from "./reviewsSlice";

function ReviewsContainer({ restaurant }) {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.entities)
  console.log(reviews)


  const restaurantReviews = reviews.filter((review) => review.restaurantId === restaurant.id)


  const handleReviewSubmit = (comment) => {
    dispatch(reviewAdded(comment))
  }

  return (
    <div>
      <ReviewInput handleReviewSubmit={ handleReviewSubmit } restaurant={ restaurant } />
      <Reviews reviews={ restaurantReviews } restaurant={ restaurant } />
    </div>
  );
}

export default ReviewsContainer;
