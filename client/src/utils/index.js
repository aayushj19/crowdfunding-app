import { Contract, BrowserProvider } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../constants";


export const getEthereumContract = async () => {
  if (!window.ethereum) throw new Error("Please Install Metamask");

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

  return contract;
};
