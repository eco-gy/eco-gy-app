import {
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useEffect, useRef, useState } from "react";
import { DeviceData } from "../@types/device";
import { DEVICE_TIMEOUT } from "../config/constants";
import { deviceData } from "../data";
import LoginButton from "./common/LoginButton";
import Device from "./Device";
import EarthMinion from "./EarthMinion";
import NewDeviceButton from "./NewDeviceButton";

let url = "wss://api.eco.gy/datasocket";
// let url = "wss://2c94-46-253-188-135.eu.ngrok.io/datasocket";

const DevicesContainer: FC = () => {
  const [deviceStats, setDeviceStats] = useState<DeviceData[]>([]);
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [newMessage, setNewMessage] = useState("");
  const [timeoutIds, setTimeoutIds] = useState<{ [key: string]: number }>({});
  const webSocket = useRef<WebSocket | null>(null);

  const updateDeviceStats = (message: string) => {
    let data = JSON.parse(message) as DeviceData;
    const id = data.id;
    if (data.status === "on") {
      const oldTimeoutId = timeoutIds[id];
      if (oldTimeoutId) {
        clearTimeout(oldTimeoutId);
      }
      // launch a timer to declare the machine off after 1 min of no updates
      const timeoutId = setTimeout(() => {
        console.log(data.id, "declared off");
        setNewMessage(() => JSON.stringify({ id: data.id, status: "off" }));
      }, DEVICE_TIMEOUT);
      setTimeoutIds((prevState) => ({ ...prevState, [id]: timeoutId }));
    }
    setLastUpdate(() => {
      const now = new Date().toLocaleTimeString();
      return now;
    });
    // update stats from device specified in message
    setDeviceStats((prevState) => {
      const newState = [...prevState];
      const updateIdx = newState.findIndex((d) => d.id === data.id);
      if (updateIdx >= 0) {
        newState[updateIdx] = {
          ...newState[updateIdx],
          ...data,
        };
        return [...newState];
      } else {
        return [...newState, { ...data }];
      }
    });
  };

  useEffect(() => {
    if (!webSocket.current) {
      webSocket.current = new WebSocket(url);
      webSocket.current.onmessage = (message: { data: string }) =>
        setNewMessage(() => message.data);
    }
    return () => {
      if (webSocket.current?.readyState === 1) {
        console.log("closing");
        webSocket.current?.close();
        webSocket.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (newMessage) {
      updateDeviceStats(newMessage);
    }
  }, [newMessage]);
  const co2Stats = deviceStats.map((d) =>
    parseFloat(d.stats.find((k) => k.name === "Co2")?.value || "0")
  );
  console.log(co2Stats);
  const totalEmmissions = co2Stats.reduce((acc, val) => {
    acc += val;
    return acc;
  }, 0);
  return (
    <VStack width="80%">
      <HStack justifyContent="space-between" width="100%">
        <Heading fontSize={[20, 32]}>my devices</Heading>
        <LoginButton />
      </HStack>
      <Stack
        padding={4}
        borderRadius="12px"
        border="1px solid silver"
        direction="column"
        divider={<Divider />}
        width="100%"
        background="white"
        onClick={() => console.log("Go to device page")}
      >
        {deviceStats.map((d) => (
          <Device key={d.name} data={d} />
        ))}
        <NewDeviceButton />
      </Stack>
      <Text
        alignSelf="flex-end"
        color="rgba(255, 255, 255, 0.4)"
      >{`Updated ${lastUpdate}`}</Text>
      <EarthMinion
        status={
          totalEmmissions < 68.5
            ? "happy"
            : totalEmmissions > 600
            ? "sad"
            : "bofbof"
        }
      />
    </VStack>
  );
};

export default DevicesContainer;
