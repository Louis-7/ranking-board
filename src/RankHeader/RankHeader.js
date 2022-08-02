import React from 'react';
import { PageHeader } from 'antd';

export class RankHeader extends React.Component {
    render() {
        return (
            <PageHeader
                className="site-page-header"
                title="Statistics"
                subTitle="📈"
            />
        )
    }
}