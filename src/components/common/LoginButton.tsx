import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useUserContext } from "../../context/UserContext";
import { GoMarkGithub } from "react-icons/go";

const LoginButton: FC = () => {
  const { login, logout, user } = useUserContext();
  return (
    <Button
      backgroundColor="#0D0D0D"
      leftIcon={<GoMarkGithub />}
      onClick={() => {
        user ? logout() : login();
      }}
    >
      {user ? "Loggout" : "Connect with GitHub"}
    </Button>
  );
};
export default LoginButton;
