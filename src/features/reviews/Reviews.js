import React from "react";
import Review from "./Review";

function Reviews({ reviews, handleReviewDelete }) {  

  return (
    <ul>
      {reviews.map((review) => <Review key={ review.id } review={ review } handleReviewDelete={ handleReviewDelete } />)}
    </ul>
  )
}

export default Reviews;
