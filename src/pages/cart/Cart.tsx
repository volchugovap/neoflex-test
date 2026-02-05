import { type FC } from "react";
import { CardCart } from "../../components";
import { useSelector } from "../../store";
import { FinishPrice } from "../../components/finish-price/FinishPrice";
import { useTranslation } from "react-i18next";

export const Cart: FC = () => {
  const cart = useSelector((state) => state.cart);

  const { t } = useTranslation();

  return (
    <main>
      <p className="mb-3.5 text-[20px] font-semibold">{t("Корзина")}</p>
      <div className="flex gap-32">
        <div className="flex flex-1 flex-col gap-9">
          {cart.map(({ id }) => (
            <CardCart id={id} key={id} />
          ))}
        </div>

        <FinishPrice />
      </div>
    </main>
  );
};
