import { Divider, Stack } from "@chakra-ui/react";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { deviceData } from "../data";
import Device from "./Device";
import NewDeviceButton from "./NewDeviceButton";

let url = "wss://api.eco.gy/datasocket";
// let url = "wss://2c94-46-253-188-135.eu.ngrok.io/datasocket";

const DevicesContainer: FC = () => {
  const [deviceStats, setDeviceStats] = useState(deviceData);
  const webSocket = useRef<WebSocket | null>(null);

  const updateDeviceStats = ({ data: dataString }: { data: string }) => {
    let data = JSON.parse(dataString);
    // update stats from device specified in message
    setDeviceStats((prevState) => {
      const newState = [...prevState];
      const updateIdx = newState.findIndex((d) => d.id === data.id);
      if (updateIdx >= 0) {
        newState[updateIdx] = { ...newState[updateIdx], ...data };
        return [...newState];
      }
      return prevState;
    });
  };

  useEffect(() => {
    if (!webSocket.current) {
      webSocket.current = new WebSocket(url);
      webSocket.current.onmessage = updateDeviceStats;
    }
    return () => {
      if (webSocket.current?.readyState === 1) {
        console.log("closing");
        webSocket.current?.close();
      }
    };
  }, []);

  return (
    <Stack
      padding={4}
      borderRadius="12px"
      border="1px solid silver"
      direction="column"
      width="80%"
      divider={<Divider />}
      onClick={() => console.log("Go to device page")}
    >
      {deviceStats.map((d) => (
        <Device key={d.name} data={d} />
      ))}
      <NewDeviceButton />
    </Stack>
  );
};

export default DevicesContainer;
