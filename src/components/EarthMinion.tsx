import { FC } from "react";
import { Image } from "@chakra-ui/react";
import happy from "../assets/happy.png";
import bofbof from "../assets/bofbof.png";
import sad from "../assets/sad.png";
import { SmallAddIcon } from "@chakra-ui/icons";

type Props = {
  status: string;
};

const earths: { [key: string]: string } = {
  happy,
  bofbof,
  sad,
};

const EarthMinion: FC<Props> = ({ status }) => {
  return (
    <Image
      src={earths[status]}
      w={[100, 200]}
      position="fixed"
      bottom="12px"
      left="12px"
    />
  );
};
export default EarthMinion;
