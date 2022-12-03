import { Center, Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import LoginPage from "./LoginPage";

const HomePage: FC = () => {
  return (
    <Center height="100vh">
      <Heading>Home</Heading>
      <LoginPage />
    </Center>
  );
};

export default HomePage;
