import { IAssets, ICrypto } from "./dataTypes"

export const cryptoData:ICrypto[] = [
    
      {
        id: 'bitcoin',
        icon: 'https://static.coinstats.app/coins/1650455588819.png',
        name: 'Bitcoin',
        symbol: 'BTC',
        rank: 1,
        price: 44870.39834657236,
        priceBtc: 1,
        volume: 35728788775.15447,
        marketCap: 879141227764.5575,
        availableSupply: 19592900,
        totalSupply: 21000000,
        priceChange1h: -0.34,
        priceChange1d: 0.94,
        priceChange1w: 5.02,
        contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        
      },
      {
        id: 'ethereum',
        icon: 'https://static.coinstats.app/coins/1650455629727.png',
        name: 'Ethereum',
        symbol: 'ETH',
        rank: 2,
        price: 2262.9329473372445,
        priceBtc: 0.05043730802649077,
        volume: 15049137392.625889,
        marketCap: 271968761037.10645,
        availableSupply: 120184189,
        totalSupply: 120184189,
        priceChange1h: -0.07,
        priceChange1d: 0.42,
        priceChange1w: -1.87,
        
        contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        
      },
      {
        id: 'tether',
        icon: 'https://static.coinstats.app/coins/1650455771843.png',
        name: 'Tether',
        symbol: 'USDT',
        rank: 3,
        price: 0.9958245177734858,
        priceBtc: 0.00002219540265316914,
        volume: 40587650892.897285,
        marketCap: 93233699508.00995,
        availableSupply: 93624627476,
        totalSupply: 93624627476,
        priceChange1h: -0.22,
        priceChange1d: 0.02,
        priceChange1w: -0.2,
        
        contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        
       
      },
      {
        id: 'binance-coin',
        icon: 'https://static.coinstats.app/coins/1666608145347.png',
        name: 'BNB',
        symbol: 'BNB',
        rank: 4,
        price: 301.59863198670274,
        priceBtc: 0.006722171383726176,
        volume: 1632019815.3942976,
        marketCap: 46402804362.74094,
        availableSupply: 153856150,
        totalSupply: 153856150,
        priceChange1h: 0.09,
        priceChange1d: -1.98,
        priceChange1w: -2.93,
        
        contractAddress: 'BNB',
       
        
      },
      {
        id: 'solana',
        icon: 'https://static.coinstats.app/coins/1701234596791.png',
        name: 'Solana',
        symbol: 'SOL',
        rank: 5,
        price: 93.7035752645126,
        priceBtc: 0.0020885091157300402,
        volume: 3591253070.807396,
        marketCap: 40461063524.96437,
        availableSupply: 431798503,
        totalSupply: 566552781,
        priceChange1h: -0.98,
        priceChange1d: -2.94,
        priceChange1w: -11.17,
       
        contractAddress: '0x7dff46370e9ea5f0bad3c4e29711ad50062ea7a4',
        
        
      },
      {
        id: 'ripple',
        icon: 'https://static.coinstats.app/coins/XRPdnqGJ.png',
        name: 'XRP',
        symbol: 'XRP',
        rank: 6,
        price: 0.5629434018448091,
        priceBtc: 0.000012547145859419824,
        volume: 1103177305.849332,
        marketCap: 30517408090.486538,
        availableSupply: 54210437480,
        totalSupply: 99988065643,
        priceChange1h: -0.6,
        priceChange1d: -1.22,
        priceChange1w: -9.34,
       
        contractAddress: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
       
        
      },
      {
        id: 'usd-coin',
        icon: 'https://static.coinstats.app/coins/1650455825065.png',
        name: 'USDC',
        symbol: 'USDC',
        rank: 7,
        price: 1,
        priceBtc: 0.000022259755933599935,
        volume: 8964820403,
        marketCap: 25343872213,
        availableSupply: 25341702291,
        totalSupply: 25346562356,
        priceChange1h: 0.02,
        priceChange1d: -0.05,
        priceChange1w: -0.03,
        contractAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        
      },
      {
        id: 'staked-ether',
        icon: 'https://static.coinstats.app/coins/staked-etheruqt.png',
        name: 'Lido Staked Ether',
        symbol: 'STETH',
        rank: 8,
        price: 2263.48,
        priceBtc: 0.05038451236058478,
        volume: 12583680,
        marketCap: 20949523852,
        availableSupply: 9253636,
        totalSupply: 9253636,
        priceChange1h: -0.06,
        priceChange1d: 0.54,
        priceChange1w: -1.67,
        contractAddress: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        
        
      },
    ]
    
  
  
  export const cryptoAssets:IAssets[] = [
    {
      id: 'bitcoin',
      amount: 0.02,
      price: 26244,
      
    },
    {
      id: 'ethereum',
      amount: 5,
      price: 2400,
      
    },
    {
      id: 'dogecoin',
      amount: 21333,
      price: 0.0000001,
    }
  ]