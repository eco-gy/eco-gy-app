import { Center, Code, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { INSTALL_COMMAND } from "../../config/constants";
import { FaCopy } from "react-icons/fa";

const InstallCommand: FC = () => {
  return (
    <Center
      p="12px"
      gap={2}
      justifyContent="center"
      padding="8px"
      borderRadius="4px"
      backgroundColor="#6D485E"
    >
      <Code backgroundColor="transparent" color="white" fontFamily="PT Mono">
        {INSTALL_COMMAND}
      </Code>
      <IconButton
        variant="ghost"
        onClick={() => navigator.clipboard.writeText(INSTALL_COMMAND)}
        aria-label="copy-command"
      >
        <FaCopy color="white" />
      </IconButton>
    </Center>
  );
};
export default InstallCommand;
