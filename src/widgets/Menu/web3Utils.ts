
// This function detects most providers injected at window.ethereum
import detectEthereumProvider from '@metamask/detect-provider';


declare let window: any;


export const addRupee = async () => {
    const provider = await detectEthereumProvider();
    if(provider) {
       window.ethereum.request({
        method: 'metamask_watchAsset',
        params: {
         type: "ERC20",
         options: {
             address: "0x8efa59bf5f47c6fe0e97c15cad12f2be6bb899a1",
             symbol: "gRUPEE",
             decimals: 18,
             image: "https://bscscan.com/token/images/goldenrupee_32.png"
        },
     },
    }).then(()=>{
        window.ethereum.request({
            method: 'metamask_watchAsset',
            params: {
             type: "ERC20",
             options: {
                 address: "0x7b0409a3a3f79baa284035d48e1dfd581d7d7654",
                 symbol: "RUPEE",
                 decimals: 18,
                 image: "https://bscscan.com/token/images/hyruleswap_32.png"
            },
         },
        })
    })
       
    }
    else { 
        console.log("Please install Metamask")
    }
}




  export default addRupee