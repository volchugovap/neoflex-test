import { type FC } from "react";
import { getSections } from "../../data";
import { CardMain } from "../../components";
import { useTranslation } from "react-i18next";

export const Main: FC = () => {
  const { t } = useTranslation();

  return (
    <main>
      {getSections().map(({ name, data }, ind) => (
        <section key={ind}>
          <h1 className="text-gray mb-6 text-[20px] font-semibold">
            {t(name)}
          </h1>
          <div className="mb-7 flex flex-wrap items-center justify-center gap-9">
            {data.map(({ id }) => (
              <CardMain id={id} key={id} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};
