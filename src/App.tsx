
import { Layout } from 'antd';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import AppSider from './components/AppSider';
import { FC } from 'react';

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  height:'600px'

};

const App:FC = () => (
 
    <Layout style={layoutStyle}>
      <AppHeader/>
        <Layout>
        <AppContent/>
        <AppSider/>
      </Layout>
    </Layout>

);

export default App;