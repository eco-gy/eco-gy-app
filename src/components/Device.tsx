import {
  Button,
  Heading,
  Stack,
  Stat,
  StatGroup,
  StatLabel,
} from "@chakra-ui/react";
import { FC } from "react";
import { DeviceData } from "../@types/device";
import DeviceInfo from "./DeviceInfo";
import MainStats from "./MainStats";
import { Link } from "react-router-dom";
import { DETAILS_PAGE_PATH } from "../config/constants";

type Props = {
  data: DeviceData;
};
const Device: FC<Props> = ({ data }) => {
  return (
    <Link to={{ pathname: DETAILS_PAGE_PATH, search: `?device_id=${data.id}` }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <DeviceInfo name={data.name} status={data.status} stats={data.stats} />

        {data.status === "on" && <MainStats stats={data.stats} />}
      </Stack>
    </Link>
  );
};
export default Device;
