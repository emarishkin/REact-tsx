import { FC } from "react";
import { Layout } from 'antd';
import { Card } from 'antd';
const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const AppSider:FC = () => {
    return(
     <Layout.Sider width="25%" style={siderStyle}>
        <Card  style={{ width: 300 }}>
      
    </Card>
     </Layout.Sider>  
    )
}

export default AppSider