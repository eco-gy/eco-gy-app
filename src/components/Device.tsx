import { Heading, Stack, Stat, StatGroup, StatLabel } from "@chakra-ui/react";
import { FC } from "react";
import { DeviceData } from "../@types/device";
import DeviceInfo from "./DeviceInfo";
import MainStats from "./MainStats";

type Props = {
  data: DeviceData;
};
const Device: FC<Props> = ({ data }) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <DeviceInfo name={data.name} status={data.status} />

      <MainStats stats={data.stats} />
    </Stack>
  );
};
export default Device;
