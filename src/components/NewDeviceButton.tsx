import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { FC } from "react";

const NewDeviceButton: FC = () => {
  return (
    <IconButton variant="ghost" icon={<AddIcon />} aria-label="add device" />
  );
};
export default NewDeviceButton;
