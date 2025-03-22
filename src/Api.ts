import { cryptoAssets, cryptoData } from "./data"
import { IAssets, ICrypto } from "./dataTypes"

export function fakefetchCrypto(){
    return (
        new Promise<ICrypto[]>((resolve) => {
            setTimeout(()=>
                resolve(cryptoData),2000)
        })
    )
}


export function fakeCryptoAssets(){
    return(
        new Promise<IAssets[]>((resolve) => {
            setTimeout(()=>
                resolve(cryptoAssets),2000)
        })
    )
}