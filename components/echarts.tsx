import React from "react";
import ReactEcharts, { EChartsReactProps } from "echarts-for-react";

export const Echarts = (props: EChartsReactProps) => {
  return <ReactEcharts {...props}></ReactEcharts>;
};
