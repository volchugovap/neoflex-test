import { type FC } from "react";
import { getSections } from "../../data";
import { CardMain } from "../../components";

export const Main: FC = () => {
  return (
    <main>
      {getSections().map(({ name, data }) => (
        <section>
          <h1 className="text-gray mb-6 text-[20px] font-semibold">{name}</h1>
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
