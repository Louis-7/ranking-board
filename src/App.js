import './App.less';
import { Layout, Typography} from 'antd';
import { DashBoard } from './DashBoard/DashBoard.js'


const { Header, Footer, Content } = Layout;
const { Title } = Typography;


function App() {
  return (
    <Layout>
      <Header>
        <Title className="rank-title">Ranking Board</Title>
      </Header>
      <Content>
        <DashBoard/>
      </Content>
      <Footer style={{ textAlign: 'center', }}>Cloud Team @2022</Footer>
    </Layout>
  );
}

export default App;
