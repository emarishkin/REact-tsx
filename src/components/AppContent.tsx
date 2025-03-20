
import { FC } from "react";
import { Layout } from 'antd';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const AppContent:FC = () => {
    return(
        <Layout.Content style={contentStyle}>Content</Layout.Content>

        
    )
}

export default AppContent