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
  return (
    <StatGroup gap={4}>
      {stats.map((s) => (
        <Stat key={s.name}>
          <StatLabel>{s.name}</StatLabel>
          <StatNumber>{s.value}</StatNumber>
          <StatHelpText>{s.unit}</StatHelpText>
        </Stat>
      ))}
    </StatGroup>
  );
};
export default MainStats;
