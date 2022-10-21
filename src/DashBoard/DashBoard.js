import React from 'react';
import axios from 'axios';
import { Col, Row, Statistic, Card } from 'antd';
import { RankHeader } from '../RankHeader/RankHeader.js'
import { RankingPlot } from '../RankingPlot/RankingPlot.js'

import './DashBoard.less';

export class DashBoard extends React.Component {

    constructor() {
        super();

        this.state = {
            plotOptions: {},
            totalUsers: 0,
            totalPoints: 0
        };

        let token  = 'GHSAT0AAAAAABHK4A7YSMMUEBUPYRQGPEHGY2SFAMQ'

        this.dataUrl = `https://raw.githubusercontent.com/BeclsUser/ranking-board/main/data/ranking.json?token=${token}`
    }

    componentDidMount() {
        axios.get(this.dataUrl)
            .then((response) => {
                let data    = response.data;
                let ranking = data.ranking

                let plotOptions = {
                    xAxis: {
                        data: ranking.map((record) => record.name),
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