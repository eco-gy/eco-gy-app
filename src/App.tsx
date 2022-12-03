import { useState } from "react";
import { Center } from "@chakra-ui/react";
import DevicesContainer from "./components/DevicesContainer";
import { createClient } from '@supabase/supabase-js'

function App() {
  const [count, setCount] = useState(0);
  const supabase = createClient('https://vingtpdmpsgstuzdzynw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbmd0cGRtcHNnc3R1emR6eW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwODQ2MTQsImV4cCI6MTk4NTY2MDYxNH0.JzUxXmGHCjONBbFHN-GIi6kt5oxkBzp0OcxTcOwcmsg')

  // Get URL parameter for device ID
  const urlParams = new URLSearchParams(window.location.search);
  const deviceId = urlParams.get('device');
  console.log(deviceId);
  
  supabase.auth.signInWithOAuth({
    provider: 'github'  
  })

  return (
    <Center height="100vh">
      <DevicesContainer />
    </Center>
  );
}

export default App;
