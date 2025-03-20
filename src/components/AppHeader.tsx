import { FC } from "react";
import { Layout,Space } from 'antd';
import { createFromIconfontCN,HomeOutlined,LoadingOutlined,SettingFilled,SmileOutlined,SyncOutlined, } from '@ant-design/icons';


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 120,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const AppHeader:FC = () => {
    return(
  <Layout.Header style={headerStyle}>

   <Space>
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" style={{ color: '#1877F2' }} />
    <IconFont type="icon-twitter" />
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" style={{ color: '#1877F2' }} />
    <IconFont type="icon-twitter" />
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
    
  </Space>


  </Layout.Header>
    
        
    )
}

export default AppHeader