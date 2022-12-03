import { Divider, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { DeviceData } from "../@types/device";
import Device from "../components/Device";
import NewDeviceButton from "../components/NewDeviceButton";

const DevicesContainer: FC = () => {
  const devices: DeviceData[] = [
    {
      name: "Laptop",
      status: "on",
      stats: [
        {
          name: "Consumption",
          value: 34,
          unit: "W/h",
        },
        {
          name: "CO2",
          value: 120,
          unit: "kg",
        },
      ],
    },
    {
      name: "Desktop",
      status: "off",
      stats: [
        {
          name: "Consumption",
          value: 0,
          unit: "W/h",
        },
        {
          name: "CO2",
          value: 0,
          unit: "kg",
        },
      ],
    },
  ];
  return (
    <Stack
      padding={4}
      borderRadius="12px"
      border="1px solid silver"
      direction="column"
      width="80%"
      divider={<Divider />}
    >
      {devices.map((d) => (
        <Device key={d.name} data={d} />
      ))}
      <NewDeviceButton />
    </Stack>
  );
};

export default DevicesContainer;
