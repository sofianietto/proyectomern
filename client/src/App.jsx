import './App.css'
import 'antd/dist/reset.css';
import { Layout } from 'antd'
import Logo from './componentes/logo'
import MenuList from './componentes/MenuList';
import AppRoutes from './componentes/AppRoutes';



const { Header, Content, Sider } = Layout;
function App() {

  return (
    <>
      <Layout>
        <Sider className='siderbar'>
          <Logo />
          <MenuList />
        </Sider>
        <Layout>
          <Header className='Header'>
          </Header>
          <Content className='content'>
            <AppRoutes />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
