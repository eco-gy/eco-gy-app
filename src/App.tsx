import { useState } from "react";
import { Center } from "@chakra-ui/react";
import DevicesContainer from "./components/DevicesContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Center height="100vh">
      <DevicesContainer />
    </Center>
  );
}

export default App;
