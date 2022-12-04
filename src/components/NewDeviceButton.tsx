import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import InstallCommand from "./common/InstallCommand";

const NewDeviceButton: FC = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        variant="ghost"
        icon={<AddIcon color="black" />}
        aria-label="add device"
      />
      <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Device</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>To add a new device execute this command in a terminal:</Text>
            <InstallCommand />
            <Text>
              Once the command finishes, you will be able to close this window
              and the new device will be added to your dashboard
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default NewDeviceButton;
