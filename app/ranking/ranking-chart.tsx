import { FC } from "react";
import { Echarts } from "@/components/echarts";
import { RankingRecord } from "@/types/event-data";

export interface RankingChartProps {
  rankingRecords: RankingRecord[];
}

export const RankingChart: FC<RankingChartProps> = ({ rankingRecords }) => {
  const plotOption = {
    xAxis: {
      data: rankingRecords.map((record) => record.receiver),
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        data: rankingRecords.map((record) => record.points),
      },
    ],
  };

  return <Echarts option={plotOption} opts={{ renderer: "svg" }}></Echarts>;
};
