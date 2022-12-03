import { Box, Heading, HStack } from "@chakra-ui/react";
import { FC } from "react";
import { DeviceData } from "../@types/device";

type Props = Pick<DeviceData, "name" | "status">;
const DeviceInfo: FC<Props> = ({ name, status }) => {
  return (
    <HStack flexDirection="row">
      <svg height="50" width="50">
        <circle
          cx="25"
          cy="25"
          r="10"
          fill={status === "on" ? "#4caf50" : "#f44336"}
        />
      </svg>
      <Heading>{name}</Heading>
    </HStack>
  );
};
export default DeviceInfo;
