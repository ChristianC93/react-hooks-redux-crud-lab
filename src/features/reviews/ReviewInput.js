import React, { useState } from "react";
import Reviews from "./Reviews";

function ReviewInput({ handleReviewSubmit, restaurant }) {
  const [comment, setComment] = useState("");
  

  const handleChange = (e) => {
    setComment(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReviewSubmit({comment, restaurantId: restaurant.id});
    setComment("");
  }
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>Comment:</label>
        <textarea value={ comment } onChange={ handleChange }></textarea>
        <button type="submit">Add Review</button>
      </form>
      <p>Review Text: {comment}</p>
    </div>
  )
}

export default ReviewInput;
