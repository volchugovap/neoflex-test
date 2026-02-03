import { type FC } from "react";
import { Link } from "react-router";
import { useSelector } from "../../../store";

export const FavoritesLink: FC = () => {
  const favorites = useSelector((state) => state.favorites);

  const countItemsInFavorites = favorites.length;

  return (
    <Link to="/favorites" className="relative">
      <img src="/heart.svg" alt="favorite" />
      {countItemsInFavorites > 0 && (
        <span className="bg-darkOrange absolute -top-3 -right-3 flex size-5 items-center justify-center rounded-full text-xs text-white">
          {countItemsInFavorites}
        </span>
      )}
    </Link>
  );
};
