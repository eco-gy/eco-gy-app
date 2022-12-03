import { Center } from "@chakra-ui/react";
import { FC } from "react";
import DevicesContainer from "../components/DevicesContainer";

const DashboardPage: FC = () => {
  return (
    <Center height="100vh">
      <DevicesContainer />
    </Center>
  );
};
export default DashboardPage;
