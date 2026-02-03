import { type FC } from "react";
import { LeftSide } from "./left-side-of-card/LeftSide";
import { RightSide } from "./right-side-of-card/RightSide";

interface IProps {
  id: number;
}

export const CardCart: FC<IProps> = ({ id }) => {
  return (
    <div className="shadow-black10 flex justify-between rounded-4xl bg-white py-4 pr-7 pl-4.5">
      <LeftSide id={id} />

      <RightSide id={id} />
    </div>
  );
};
