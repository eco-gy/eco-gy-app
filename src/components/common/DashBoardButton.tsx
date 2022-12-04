import { FC } from "react";
import { DASHBOARD_PAGE_PATH } from "../../config/constants";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { AiOutlineDashboard } from "react-icons/ai";

const DashBoardButton: FC = () => {
  return (
    <Link to={DASHBOARD_PAGE_PATH}>
      <Button leftIcon={<AiOutlineDashboard />}>Go to dashboard</Button>
    </Link>
  );
};
export default DashBoardButton;
