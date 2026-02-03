import { type FC } from "react";

interface IProps {
  rate: number;
}

export const Rate: FC<IProps> = ({ rate }) => {
  return (
    <div className="flex gap-2.5">
      <img src="/star.svg" alt="star" />
      <span className="text-gray text-[17px] font-semibold">{rate}</span>
    </div>
  );
};
