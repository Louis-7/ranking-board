import './App.less';
import { Layout, Typography} from 'antd';
import { DashBoard } from './DashBoard/DashBoard.js'


const { Header, Footer, Content } = Layout;
const { Title } = Typography;


function App() {
  const today = new Date()
  const year = today.getFullYear();
  return (
    <Layout>
      <Header>
        <Title className="rank-title">Ranking Board</Title>
      </Header>
      <Content>
        <DashBoard/>
      </Content>
      <Footer style={{ textAlign: 'center', }}>Cloud Team @{year}</Footer>
    </Layout>
  );
}

export default App;
