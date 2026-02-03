import { type FC } from "react";
import { Logo } from "../logo/Logo";
import { CartLink } from "./cart-link/CartLink";
import { FavoritesLink } from "./favorites-link/FavoritesLink";

export const Header: FC = () => {
  return (
    <header className="flex justify-between py-3.75">
      <Logo />

      <nav className="flex gap-6">
        <FavoritesLink />

        <CartLink />
      </nav>
    </header>
  );
};
