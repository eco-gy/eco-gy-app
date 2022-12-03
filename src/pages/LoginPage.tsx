import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Code,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { createClient, User } from "@supabase/supabase-js";
import {
  BACKEND_API,
  DASHBOARD_PAGE_PATH,
  LOGIN_PAGE_PATH,
} from "../config/constants";
import qs from "qs";
import { useNavigate, Link } from "react-router-dom";

const LoginPage: FC = () => {
  const [signIn, setSignIn] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState<User>();
  const supabase = createClient(
    "https://vingtpdmpsgstuzdzynw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbmd0cGRtcHNnc3R1emR6eW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwODQ2MTQsImV4cCI6MTk4NTY2MDYxNH0.JzUxXmGHCjONBbFHN-GIi6kt5oxkBzp0OcxTcOwcmsg"
  );
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

  const getUser = async (): Promise<User | undefined> => {
    const { error } = await supabase.auth.getSession();
    if (error) {
      console.log(error);
      return;
    }
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
      return user;
    }
    return;
  };

  const loginGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}${LOGIN_PAGE_PATH}${window.location.search}`,
      },
    });

    getUser();
  };

  const logoutGithub = async () => {
    await supabase.auth.signOut();
    setUser(undefined);
  };

  const makeAssociation = (payload: { deviceId: string; userId: string }) => {
    fetch(BACKEND_API, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(payload),
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
    getUser().then((tempUser) => {
      const deviceId = getDeviceID();
      console.log(tempUser, deviceId);

      if (deviceId && tempUser && tempUser.id) {
        console.log("make api call to associate", deviceId, tempUser.id);
        makeAssociation({ deviceId, userId: tempUser.id });
      }
    });
  }, []);

  useEffect(() => {
    if (signIn) {
      if (!user) {
        console.log("login");
        loginGithub();
      } else {
        logoutGithub();
      }
      setSignIn(false);
    }
  }, [signIn]);

  return (
    <Center height="100vh">
      <Stack>
        <Button onClick={() => setSignIn(true)}>
          {user ? "Loggout" : "Login"}
        </Button>
        {user ? (
          <Center flexDirection="column" gap={4}>
            <Text>
              Logged in as <Code>{user.email}</Code>
            </Text>
            <Text>
              User ID is <Code>{user.id}</Code>
            </Text>
            <Link to={DASHBOARD_PAGE_PATH}>
              <Button>Go to dashboard</Button>
            </Link>
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
