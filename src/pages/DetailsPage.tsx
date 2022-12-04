import { FC, useEffect, useState } from "react";
import qs from "qs";
import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Label,
  ResponsiveContainer,
} from "recharts";
import {
  BACKEND_API,
  DASHBOARD_PAGE_PATH,
  DEVICE_HISTORY_ENDPOINT,
} from "../config/constants";
import DashBoardButton from "../components/common/DashBoardButton";

const DetailsPage: FC = () => {
  const [data, setData] = useState([]);
  const searchQuery = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  const device_id = searchQuery.device_id as string;

  const getData = async (device_id: string) => {
    const data = await fetch(`${BACKEND_API}${DEVICE_HISTORY_ENDPOINT}`, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ device_id }),
    }).then((res) => res.json());
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    // fetch data for device_id
    console.log(device_id);
    getData(device_id);
  }, [device_id]);
  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     power: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     power: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     power: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     power: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     power: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     power: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     power: 4300,
  //     amt: 2100,
  //   },
  // ];
  return (
    <Center>
      <Stack direction="column" alignItems="center">
        <Heading
          size="lg"
          textAlign="center"
        >{`Stats for ${device_id}`}</Heading>
        <Center>
          <Box
            bg="white"
            padding="24px"
            borderRadius="12px"
            margin="20px"
            height="50vh"
            width="80vh"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name">
                  <Label
                    value="Power consumption"
                    offset={-5}
                    position="insideBottom"
                  />
                </XAxis>
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="power" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Center>
        <DashBoardButton />
      </Stack>
    </Center>
  );
};
export default DetailsPage;
