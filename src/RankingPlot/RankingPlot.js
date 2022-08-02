import React from 'react';
import ReactEcharts from "echarts-for-react";
import './RankingPlot.less';
export class RankingPlot extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <ReactEcharts option={this.props.plotOptions} opts={{renderer: 'svg'}}/>
    }
}