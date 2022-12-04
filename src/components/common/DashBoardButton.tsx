import { FC } from "react";
import { DASHBOARD_PAGE_PATH } from "../../config/constants";
import { Link } from "react-router-dom";
import { Button, Stack, Text } from "@chakra-ui/react";
import { AiOutlineDashboard } from "react-icons/ai";

const DashBoardButton: FC = () => {
  return (
    <Stack alignItems="center" marginTop="24px">
      <Link to={DASHBOARD_PAGE_PATH}>
        <Button
          backgroundColor="#E06251"
          color="white"
          leftIcon={<AiOutlineDashboard />}
        >
          Open Dashboard
        </Button>
      </Link>
      {/* <Text color="rgba(255, 255, 255, 0.4)">
        see what other devices are consuming
      </Text> */}
    </Stack>
  );
};
export default DashBoardButton;
