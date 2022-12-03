import { Button, Center, Code, Stack, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { SB_DOMAIN } from "../config/constants";
import { getUserFromStorage } from "../utils/utils";

const LoginPage: FC = () => {
  const [signIn, setSignIn] = useState(false);
  const [token, setToken] = useState(false);
  const [user, setUser] = useState(getUserFromStorage());
  const supabase = createClient(
    "https://vingtpdmpsgstuzdzynw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbmd0cGRtcHNnc3R1emR6eW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwODQ2MTQsImV4cCI6MTk4NTY2MDYxNH0.JzUxXmGHCjONBbFHN-GIi6kt5oxkBzp0OcxTcOwcmsg"
  );

  const loginGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "/login",
      },
    });

    const user = getUserFromStorage();
    if (user) {
      setUser(user);
    }
  };

  useEffect(() => {
    if (signIn) {
      loginGithub();
    }
  }, [signIn]);

  return (
    <Center height="100vh">
      <Stack>
        <Button onClick={() => setSignIn(true)}>Login</Button>
        {user ? (
          <>
            <Text>
              Logged in as <Code>{user.email}</Code>
            </Text>
            <Text>
              User ID is <Code>{user.id}</Code>
            </Text>
          </>
        ) : (
          <Text>Not logged in</Text>
        )}
      </Stack>
    </Center>
  );
};
export default LoginPage;
