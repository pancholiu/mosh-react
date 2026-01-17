import React from "react";

interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>NavBa: {cartItemsCount}</div>;
};

export default NavBar;
