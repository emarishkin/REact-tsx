import { cryptoAssets, cryptoData } from "./data"

export function fakefetchCrypto(){
    return (
        new Promise((resolve) => {
            setTimeout(()=>
                resolve(cryptoData),2000)
        })
    )
}


export function fakeCryptoAssets(){
    return(
        new Promise((resolve) => {
            setTimeout(()=>
                resolve(cryptoAssets),2000)
        })
    )
}