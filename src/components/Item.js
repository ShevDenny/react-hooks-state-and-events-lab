import React, { useState } from "react";

function Item({ name, category }) {
  const [addedToCart, setAddedToCart] = useState(false);

  function handleAddToCartClick(e){
    console.log(e)
    setAddedToCart((addedToCart) => !addedToCart);
}


  return (
    <li className={addedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button        
        className={addedToCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {addedToCart ? "Remove from" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
