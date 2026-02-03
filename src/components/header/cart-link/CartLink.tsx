import { type FC } from "react";
import { Link } from "react-router";
import { useSelector } from "../../../store";

export const CartLink: FC = () => {
  const cart = useSelector((state) => state.cart);

  let countItemsInCart = cart.reduce((count, cur) => count + cur.count, 0);

  return (
    <Link to="/cart" className="relative">
      <img src="/cart.svg" alt="cart" />
      {countItemsInCart > 0 && (
        <span className="bg-darkOrange absolute -top-3 -right-2 flex size-5 items-center justify-center rounded-full text-xs text-white">
          {countItemsInCart}
        </span>
      )}
    </Link>
  );
};
