import { Center, Text } from "@chakra-ui/react";
import { FC } from "react";
import InstallCommand from "../components/common/InstallCommand";

const WelcomePage: FC = () => {
  return (
    <Center height="100vh" flexDirection="column" gap={3}>
      <Text>
        eco.gy is an energy monitoring service that you can install with one
        click. Track your energy consumption and reduce your carbon footprint
        across your devices today!
      </Text>
      <InstallCommand />
      <Text>
        paste this in your mac or linux terminal requires github login
      </Text>
    </Center>
  );
};

export default WelcomePage;
