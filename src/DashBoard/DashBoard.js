import React from 'react';
import axios from 'axios';
import { Col, Row, Statistic, Card } from 'antd';
import { RankHeader } from '../RankHeader/RankHeader.js'
import { RankingPlot } from '../RankingPlot/RankingPlot.js'
import { Events } from '../Models/Events.js';

import './DashBoard.less';

export class DashBoard extends React.Component {

    constructor() {
        super();

        this.state = {
            plotOptions: {},
            totalUsers: 0,
            totalPoints: 0
        };

        this.dataUrl = `https://raw.githubusercontent.com/Louis-7/ranking-board/main/data/ranking.json`
    }

    componentDidMount() {
        axios.get(this.dataUrl)
            .then((response) => {
                let data   = response.data;
                let events = new Events(data);
                let ranking = events.getRecords();

                let plotOptions = {
                    xAxis: {
                        data: ranking.map((record) => record.receiver),
                    },
                    yAxis: {},
                    series: [
                        {
                            type: 'bar',
                            data: ranking.map((record) => record.points),
                        }
                    ]
                };

                let totalUsers = ranking.length;
                let totalPoints = ranking.reduce((prev, curr) => {
                    return prev + curr.points
                }, 0)

                this.setState({ plotOptions, totalUsers, totalPoints});
            })
    }

    render() {
        return (
            <div className="dashboard-container">
                <RankHeader/>
                <div className="dashboard-body">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card bordered={false}>
                                <Statistic title="Total Users" value={this.state.totalUsers} />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card bordered={false}>
                                <Statistic title="Total Points" value={this.state.totalPoints} />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card bordered={false}>
                              <Statistic title="Opening Issues" value={50} />
                            </Card>
                        </Col>
                        </Row>
                    <RankingPlot plotOptions={this.state.plotOptions} />
                </div>
            </div>
        )
    }
}