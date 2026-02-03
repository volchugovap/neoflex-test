import { type FC } from "react";
import { TextButton } from "../../../shared/ui";
import { useDispatch, useSelector } from "../../../store";
import { getItemById } from "../../../data";

interface IProps {
  id: number;
}

export const RightSide: FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { price } = getItemById(id);

  const deleteCardFromCart = (id: number) => {
    dispatch({ type: "cart/deleteItemCard", payload: { id } });
  };

  const cartSelect = useSelector((state) => state.cart);

  const countItem = cartSelect.find((el) => el.id === id)?.count;

  return (
    <div className="flex flex-col items-start justify-between">
      <TextButton
        className="self-end"
        type="button"
        onClick={() => deleteCardFromCart(id)}
      >
        <img src="/delete.svg" alt="delete" />
      </TextButton>
      <span className="text-15 font-semibold">
        {countItem ? countItem * price : 0} ₽
      </span>
    </div>
  );
};
