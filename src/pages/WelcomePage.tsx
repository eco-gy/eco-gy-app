import { Center, Text } from "@chakra-ui/react";
import { FC } from "react";
import DashBoardButton from "../components/common/DashBoardButton";
import InstallCommand from "../components/common/InstallCommand";

const WelcomePage: FC = () => {
  return (
    <Center height="100vh" flexDirection="column" gap={3}>
      <Text w={[300, 500]} textAlign="center">
        eco.gy is an energy monitoring service that you can install with one
        click. Track your energy consumption and reduce your carbon footprint
        across your devices today!
      </Text>
      <InstallCommand />
      <Text w={[300, 500]} textAlign="center" color="rgba(255, 255, 255, 0.4)">
        paste this in your mac or linux terminal requires github login
      </Text>
      <DashBoardButton />
    </Center>
  );
};

export default WelcomePage;
