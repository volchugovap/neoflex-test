import { type FC } from "react";
import { useDispatch } from "../../../store";
import { TextButton } from "../../../shared/ui";
import { Rate } from "./rate/Rate";
import { Price } from "./price/Price";
import { getItemById } from "../../../data";

interface IProps {
  id: number;
}

export const Description: FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();

  const { price, rate, title, oldPrice } = getItemById(id);

  const addToCart = (id: number) =>
    dispatch({ type: "cart/addItem", payload: { id } });

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <p className="font-semibold text-black">{title}</p>

        <Price price={price} oldPrice={oldPrice} />
      </div>
      <div
        className={` ${oldPrice ? "mt-1.25" : "mt-6.25"} flex justify-between`}
      >
        <Rate rate={rate} />

        <TextButton
          type="button"
          className="hover:text-gray text-[17px] font-semibold text-black transition-colors duration-350 ease-in-out"
          onClick={() => addToCart(id)}
        >
          Купить
        </TextButton>
      </div>
    </div>
  );
};
