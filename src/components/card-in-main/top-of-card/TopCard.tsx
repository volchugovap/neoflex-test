import { type Dispatch, type FC, type SetStateAction } from "react";
import { useDispatch, useSelector } from "../../../store";
import { TextButton } from "../../../shared/ui";
import { FaHeart, FaInfoCircle, FaRegHeart } from "react-icons/fa";
import { getItemById } from "../../../data";

interface IProps {
  id: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const TopCard: FC<IProps> = ({ id, setIsOpen }) => {
  const thisItemIsFavorites = useSelector((state) =>
    state.favorites.find((el) => el.id === id),
  );

  const dispatch = useDispatch();

  const { img, title } = getItemById(id);

  const addToFavorites = (id: number) =>
    dispatch({
      type: "favorites/addToFavorites",
      payload: { id },
    });

  const removeFromFavorites = (id: number) =>
    dispatch({
      type: "favorites/removeFromFavorites",
      payload: { id },
    });

  const managingFavorites = (id: number) => {
    thisItemIsFavorites ? removeFromFavorites(id) : addToFavorites(id);
  };

  return (
    <div className="items-starts flex justify-between">
      <TextButton
        className="max-h-min"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaInfoCircle size={20} />
      </TextButton>

      <img src={img} alt={title} />

      <TextButton className="max-h-min" onClick={() => managingFavorites(id)}>
        {thisItemIsFavorites ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
      </TextButton>
    </div>
  );
};
