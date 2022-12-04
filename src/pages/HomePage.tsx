import { Center, Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { useUserContext } from "../context/UserContext";
import LoginPage from "./LoginPage";
import WelcomePage from "./WelcomePage";

const HomePage: FC = () => {
  const { user } = useUserContext();
  if (user) {
    return <WelcomePage />;
  }
  return <WelcomePage />;
};

export default HomePage;
