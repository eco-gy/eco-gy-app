import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useUserContext } from "../../context/UserContext";
import { GoMarkGithub } from "react-icons/go";

const LoginButton: FC = () => {
  const { login, logout, user } = useUserContext();
  return (
    <Button
      leftIcon={<GoMarkGithub />}
      onClick={() => {
        user ? logout() : login();
      }}
    >
      {user ? "Loggout" : "Login"}
    </Button>
  );
};
export default LoginButton;
