import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { restaurantAdded, restaurantRemoved } from "./restaurantsSlice";

function RestaurantsContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.entities);
  // console.log(restaurants)
  
  const handleRestaurantSubmit = (restaurant) => {
    dispatch(restaurantAdded(restaurant));
  }

  const handleRestaurantRemove = (id) => {
    dispatch(restaurantRemoved(id));
  }
  return (
    <div>
      <RestaurantInput onRestaurantSubmit={ handleRestaurantSubmit } />
      <Restaurants restaurants={ restaurants } handleRestaurantRemove={ handleRestaurantRemove } />
    </div>
  );
}

export default RestaurantsContainer;
