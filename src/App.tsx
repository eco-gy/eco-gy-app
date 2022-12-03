import { useState } from "react";
import { Center } from "@chakra-ui/react";
import DevicesContainer from "./components/DevicesContainer";
import { createClient } from "@supabase/supabase-js";

function App() {
  const [count, setCount] = useState(0);

  // Get URL parameter for device ID
  const urlParams = new URLSearchParams(window.location.search);
  const deviceId = urlParams.get("device");
  console.log(deviceId);

  return (
    <Center height="100vh">
      <DevicesContainer />
    </Center>
  );
}

export default App;
