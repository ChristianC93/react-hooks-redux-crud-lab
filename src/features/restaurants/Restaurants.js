import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({ restaurants, handleRestaurantRemove }) {
  return (
    <ul>
      {restaurants.map((restaurant) => <Restaurant key={ restaurant.id } restaurant={ restaurant } handleRestaurantRemove={ handleRestaurantRemove }/>)}
    </ul>
  )
}

export default Restaurants;
