import type { FC } from "react";
import { TextButton } from "../../../shared/ui";
import { useDispatch, useSelector } from "../../../store";
import { getItemById } from "../../../data";

interface IProps {
  id: number;
}

export const LeftSide: FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();
  const cartSelect = useSelector((state) => state.cart);

  const { img, title, price } = getItemById(id);

  const addItemToCart = (id: number) =>
    dispatch({ type: "cart/addItem", payload: { id } });

  const removeItemFromCart = (id: number) =>
    dispatch({ type: "cart/removeItem", payload: { id } });

  const countItem = cartSelect.find((el) => el.id === id)?.count;

  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-5">
        <img src={img} alt={title} className="size-35" />
        <div className="flex gap-5">
          <TextButton type="button" onClick={() => removeItemFromCart(id)}>
            <img src="/minus.svg" alt="minus" />
          </TextButton>

          <span className="text-[17px] font-semibold">{countItem ?? 0}</span>

          <TextButton type="button" onClick={() => addItemToCart(id)}>
            <img src="/plus.svg" alt="plus" />
          </TextButton>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-[17px] font-medium">{title}</p>
        <span className="text-15 text-lightGray font-semibold">{price} ₽</span>
      </div>
    </div>
  );
};
