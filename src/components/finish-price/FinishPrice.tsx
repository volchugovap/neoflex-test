import { type FC } from "react";
import { TextButton } from "../../shared/ui";
import { useSelector } from "../../store/context";
import { getItemById } from "../../data";
import { useTranslation } from "react-i18next";

export const FinishPrice: FC = () => {
  const { t } = useTranslation();

  const cartSelector = useSelector((state) => state.cart);

  const fullItemsPrice = cartSelector?.reduce((full, { id, count }) => {
    let { price } = getItemById(id);

    return full + price * count;
  }, 0);

  return (
    <div className="shadow-black10 sticky top-5 flex max-h-30 w-full max-w-87.5 flex-col rounded-[20px] bg-white">
      <div className="flex justify-between pt-5.25 pr-4 pb-3.75 pl-5.25">
        <p className="text-15 font-semibold text-black">{t("ИТОГО")}</p>
        <span className="font-semibold text-black">₽ {fullItemsPrice}</span>
      </div>
      <TextButton
        className="shadow-black25 text-15 hover:bg-gray rounded-[20px] bg-black py-5.5 font-semibold text-white duration-350 ease-in-out"
        onClick={() => {}}
      >
        Перейти к оформлению
      </TextButton>
    </div>
  );
};
