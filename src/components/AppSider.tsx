import { FC, useEffect, useState } from "react";
import { Layout } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card,Statistic,List,Typography,Spin } from 'antd';
import { fakeCryptoAssets, fakefetchCrypto } from "../Api";
import { IAssets, ICrypto } from "../dataTypes";
const siderStyle: React.CSSProperties = {
 padding:'1rem',
 height:'1vh-120'
};

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


const AppSider:FC = () => {

  const [loading,setLoading] = useState<boolean>(false)
  const [,setCrypto] = useState<ICrypto[]>([])
  const [assets,setAssets] = useState<IAssets[]>([])

useEffect(()=>{
async function preload(){
  setLoading(true)
  const crypto = await fakefetchCrypto()
  const assets = await fakeCryptoAssets()

setAssets(assets.map((asset)=>{
  const coin:any = crypto.find((c)=>c.id === asset.id)
  return{
   
    ...asset
  }
}))
setCrypto(crypto)
setLoading(false)
}
preload()
},[])

if (loading){
  return <Spin fullscreen ></Spin>
}

    return(
     <Layout.Sider width="25%" style={siderStyle}>
        {assets.map((asset)=>(
          <Card  style={{ width: 400,marginBottom:'10px' }}>
          <Statistic 
            title={asset.id}
            value={11.28}
            precision={2}
            valueStyle={{ color: asset.grow ? '#3f8600': 'red' }}
            prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined/>}
            suffix="$"
          />
          <List
            size="small"
            bordered
            dataSource={data}
            renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
           </Card>
        ))}

        
     </Layout.Sider>  
    )
}

export default AppSider