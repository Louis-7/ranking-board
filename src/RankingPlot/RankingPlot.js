import axios from 'axios';
import React from 'react';
import ReactEcharts from "echarts-for-react";
import './RankingPlot.css';
export class RankingPlot extends React.Component {

    constructor() {
        super();

        this.state = {
            plotOptions: {}
        };

    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/louis-bec/louis-bec.github.io/main/data/ranking.json')
        .then((response) => {
            let data = response.data;

            let plotOptions = {
                xAxis: {
                    data: data.ranking.map((record) => record.name),
                },
                yAxis: {},
                series: [
                    {
                        type: 'bar',
                        data: data.ranking.map((record) => record.points),
                    }
                ]
            };

            this.setState({ plotOptions });
        })
    }


    render() {
        return <ReactEcharts option={this.state.plotOptions} opts={{renderer: 'svg'}}/>
    }
}