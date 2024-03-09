import React from "react";
import { Cart } from "./Cart";
export const CartList = ({ idN, quantity, name, pricePerTicket }) => {
  // You can't use a for loop where the arguments to a function call would go:

  return (
    <Cart
      key={idN}
      name={name}
      pricePerTicket={pricePerTicket}
      quantity={quantity}
    />
  );
};
