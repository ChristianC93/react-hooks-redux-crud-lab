import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";

function Restaurant({ restaurant, handleRestaurantRemove }) {
  const handleDeleteClick = () => {
    handleRestaurantRemove(restaurant.id)
  }
  return (
    <div>
      <li>
        {restaurant.name}
        <button onClick={ handleDeleteClick }> Delete Restaurant </button>
      </li>
      <ReviewsContainer restaurant={restaurant} />
    </div>
  );
}

export default Restaurant;
