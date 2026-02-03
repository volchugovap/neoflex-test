import { type FC } from "react";

interface IProps {
  price: number;
  oldPrice?: number;
}

export const Price: FC<IProps> = ({ price, oldPrice }) => {
  return (
    <div className="flex flex-col">
      <p className="text-darkOrange text-[16px] font-semibold">{price} ₽</p>
      {oldPrice && (
        <p className="text-orange text-end text-[14px] font-semibold line-through">
          {oldPrice} ₽
        </p>
      )}
    </div>
  );
};
