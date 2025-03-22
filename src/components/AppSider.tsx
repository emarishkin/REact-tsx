import { FC, useEffect, useState } from "react";
import { Layout } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card,Statistic,List,Spin } from 'antd';
import { fakeCryptoAssets, fakefetchCrypto } from "../Api";
import { IAssets, ICrypto } from "../dataTypes";
const siderStyle: React.CSSProperties = {
 padding:'1rem',
 height:'1vh-120'
};



const AppSider:FC = () => {

  const [loading,setLoading] = useState<boolean>(false)
  const [crypto,setCrypto] = useState<ICrypto[]>([])
  const [assets,setAssets] = useState<IAssets[]>([])

useEffect(()=>{
async function preload(){
  setLoading(true)
  const crypto = await fakefetchCrypto()
  const assets = await fakeCryptoAssets()

setAssets(assets.map((asset)=>{
  const coin:any = crypto.find((c)=>c.id === asset.id)
  return{
   totalProfit: asset.price + coin.price,
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
        {assets.map(asset=>(
          <Card  style={{ width: 400,marginBottom:'10px' }}>
          <Statistic 
            title={asset.id}
            value={asset.amount}
            precision={2}
            valueStyle={{ color: asset.grow ? '#3f8600': 'red' }}
            prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined/>}
            suffix="$"
          />
          <List
            size="small"
            bordered
            dataSource={[
              {title:'TotalProfit', value:asset.amount},
            ]}
            renderItem={(item) => (
          <List.Item>
            <span>{item.title}</span>
            <span>{item.value}</span>
          </List.Item>
        )}
      />
           </Card>
        ))}
     </Layout.Sider>  
    )
}

export default AppSider