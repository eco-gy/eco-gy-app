import {
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { FC } from "react";
import { StatType } from "../@types/device";

type Props = {
  stats: StatType[];
};

const MainStats: FC<Props> = ({ stats }) => {
  const mainStats = stats.filter((s) => s.name !== "Co2");
  return (
    <StatGroup color="#F25749" gap={4}>
      {mainStats.map((s) => (
        <Stat key={s.name}>
          <StatLabel>{s.name}</StatLabel>
          <StatNumber>{parseFloat(s.value).toFixed(3)}</StatNumber>
          <StatHelpText>{s.unit}</StatHelpText>
        </Stat>
      ))}
    </StatGroup>
  );
};
export default MainStats;
