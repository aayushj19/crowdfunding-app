import { useState,useEffect } from "react";

export default function useWallet(){
    const [walletAddress, setWalletAddress] = useState(null);

    const connectWallet = async()=>{
        if(!window.ethereum){
            alert("Please Install MetaMask");
            return;
        }
        try{
            const accounts = await window.ethereum.request({
                method:"eth_requestAccounts",
            });
            setWalletAddress(accounts);
        }
        catch(err){
            console.log("Failed to load wallet due to",err);
            
        }
        
    }
    const disconnectWallet = ()=>{  
        setWalletAddress(null);
       
    }
    useEffect(()=>{
      if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts.length ? accounts[0] : null);
      });
    }
    }, );

    return {walletAddress,connectWallet,disconnectWallet};
}