import { Avatar, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useUserContext } from "../../context/UserContext";

const UserAvatar: FC = () => {
  const { user } = useUserContext();
  if (user) {
    return (
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
        <Text fontSize="xl">{user.user_metadata["preferred_username"]}</Text>
      </Stack>
    );
  }
  return null;
};
export default UserAvatar;
