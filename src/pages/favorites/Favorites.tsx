import { type FC } from "react";
import { useSelector } from "../../store";
import { CardMain } from "../../components";

export const Favorites: FC = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <main>
      <p className="mb-3.5 text-[20px] font-semibold">Избранное</p>
      <div className="w-4xs mb-7 flex flex-wrap gap-9">
        {favorites.map(({ id }) => (
          <CardMain id={id} key={id} />
        ))}
      </div>
    </main>
  );
};
