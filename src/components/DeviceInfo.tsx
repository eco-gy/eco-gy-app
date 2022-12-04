import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { DeviceData } from "../@types/device";

type Props = Pick<DeviceData, "name" | "status" | "stats">;
const DeviceInfo: FC<Props> = ({ name, status, stats }) => {
  const co2Value = parseFloat(
    stats.find((k) => k.name === "Co2")?.value || "0"
  ).toFixed(2);
  return (
    <HStack flexDirection="row" color="white">
      <Box>
        <svg height="50" width="50">
          <circle
            cx="25"
            cy="25"
            r="10"
            fill={status === "on" ? "#F25749" : "#73465F"}
          />
        </svg>
      </Box>
      <Box>
        <Heading color="black" fontSize={{ base: "lg", sm: "3xl" }}>
          {name}
        </Heading>
        <Text color="black">
          {status === "off"
            ? "Device is off and currently not producing any emissions"
            : `${co2Value}g CO2 emitted since you opened this page`}
        </Text>
      </Box>
    </HStack>
  );
};
export default DeviceInfo;
