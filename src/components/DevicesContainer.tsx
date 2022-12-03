import { Divider, Stack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { DeviceData } from "../@types/device";
import { deviceData } from "../data";
import Device from "./Device";
import NewDeviceButton from "./NewDeviceButton";

// let url = "wss://eco-gy.herokuapp.com/datasocket";
let url = "wss://2c94-46-253-188-135.eu.ngrok.io/datasocket";

const DevicesContainer: FC = () => {
  const [deviceStats, setDeviceStats] = useState(deviceData);

  const updater = () => {
    let socket = new WebSocket(url);
    socket.onmessage = (event) => {
      let data = JSON.parse(event.data);
      // update stats from device specified in message
      // setDeviceStats({ ...deviceStats });
      console.log(data);
    };
  };

  useEffect(() => {
    updater();
  }, []);

  return (
    <Stack
      padding={4}
      borderRadius="12px"
      border="1px solid silver"
      direction="column"
      width="80%"
      divider={<Divider />}
    >
      {deviceStats.map((d) => (
        <Device key={d.name} data={d} />
      ))}
      <NewDeviceButton />
    </Stack>
  );
};

export default DevicesContainer;
