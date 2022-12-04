import React, {
  FC,
  ReactElement,
  createContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { User, createClient } from "@supabase/supabase-js";
import { DASHBOARD_PAGE_PATH } from "../config/constants";

export type UserContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
};

const defaultContextValue = {
  user: null,
  login: () => null,
  logout: () => null,
};
const UserContext = createContext<UserContextType>(defaultContextValue);

type Prop = {
  children: ReactElement | ReactElement[];
};

export const UserProvider: FC<Prop> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient(
    "https://vingtpdmpsgstuzdzynw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbmd0cGRtcHNnc3R1emR6eW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwODQ2MTQsImV4cCI6MTk4NTY2MDYxNH0.JzUxXmGHCjONBbFHN-GIi6kt5oxkBzp0OcxTcOwcmsg"
  );

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
        redirectTo: `${window.location.origin}${DASHBOARD_PAGE_PATH}${window.location.search}`,
      },
    });

    getUser();
  };

  const logoutGithub = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    getUser();
  }, []);

  const context = {
    user,
    login: loginGithub,
    logout: logoutGithub,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType =>
  React.useContext<UserContextType>(UserContext);
