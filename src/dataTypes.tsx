
export interface ICrypto{
    id: string,
    icon: string,
    name: string,
    symbol: string,
    rank: number,
    price: number,
    priceBtc: number,
    volume: number,
    marketCap: number,
    availableSupply: number,
    totalSupply: number,
    priceChange1h: number,
    priceChange1d: number,
    priceChange1w: number,
    contractAddress: string,
        
}

export interface IAssets{
    id: string,
    amount: number,
    price: number,
    grow:boolean
}