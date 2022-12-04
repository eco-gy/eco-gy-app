import {
  Alert,
  AlertIcon,
  Avatar,
  Center,
  Code,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import {
  ASSOCIATE_ENDPOINT,
  BACKEND_API,
  DASHBOARD_PAGE_PATH,
} from "../config/constants";
import qs from "qs";
import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import LoginButton from "../components/common/LoginButton";
import DashBoardButton from "../components/common/DashBoardButton";

const LoginPage: FC = () => {
  const { user } = useUserContext();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const getDeviceID = (): string | null => {
    const queryParams = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });
    const deviceId = queryParams.device_id;
    if (typeof deviceId === "string") {
      return deviceId;
    }
    return null;
  };

  const makeAssociation = ({
    deviceId,
    userId,
  }: {
    deviceId: string;
    userId: string;
  }) => {
    fetch(`${BACKEND_API}${ASSOCIATE_ENDPOINT}`, {
      method: "POST",
      body: JSON.stringify({ device_id: deviceId, user_id: userId }),
    })
      .then(() => {
        navigate(DASHBOARD_PAGE_PATH);
      })
      .catch((err) => {
        setError("Error during the association process");
        console.log("error making association", err);
      });
  };

  // initial load of the page
  useEffect(() => {
    if (user) {
      const deviceId = getDeviceID();
      console.log(user, deviceId);

      if (deviceId && user && user.id) {
        console.log("make api call to associate", deviceId, user.id);
        makeAssociation({ deviceId, userId: user.id });
      }
    }
  }, [user]);

  return (
    <Center height="100vh">
      <Stack>
        <LoginButton />
        {user ? (
          <Center flexDirection="column" gap={4}>
            <Stack
              direction="row"
              alignItems="center"
              position="fixed"
              top="12px"
              right="12px"
            >
              <Avatar
                name={user.user_metadata.name}
                src={user.user_metadata["avatar_url"]}
              />
              <Text fontSize="xl">
                {user.user_metadata["preferred_username"]}
              </Text>
            </Stack>
            <Text>
              Logged in as <Code>{user.email}</Code>
            </Text>
            <Text>
              User ID is <Code>{user.id}</Code>
            </Text>
            <DashBoardButton />
          </Center>
        ) : (
          <Text>Not logged in</Text>
        )}
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
      </Stack>
    </Center>
  );
};
export default LoginPage;
