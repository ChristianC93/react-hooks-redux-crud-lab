import React, { useState } from "react";

function RestaurantInput({ onRestaurantSubmit }) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRestaurantSubmit(name);
    setName("");
  }
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ handleChange } 
          />
        </label>
        <button type="submit">Add Restaurant</button>
      </form>
      <p>Form Text: { name }</p>
    </div>
  )
}

export default RestaurantInput;
