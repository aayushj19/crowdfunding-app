import React, { useEffect, useState } from "react";
import { getEthereumContract } from "../utils";
import CampaignCard from "../components/CampaignCard";
import { ethers, Wallet } from "ethers";
function Home() {
  const [user,setUser] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const fetchCampaigns = async () => {
    const contract = await getEthereumContract();
    const allCampaigns = await contract.getCampaigns();
    const address = await contract.getAddress(); 
    setCampaigns(allCampaigns);
    setUser(address)
  };

  const clearCampaign = () =>{
    setCampaigns([]);
  }

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div>
    <div className="p-4">
      <h1 className="text-white">Welcome {user} </h1>
      
      <h1 className="text-2xl flex justify-center text-white  mt-5  font-bold mb-4">All Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((c, idx) => (
          <CampaignCard
            key={idx}
            title={c.title}
            description={c.description}
            target={ethers.formatEther(c.target)}
            collected={ethers.formatEther(c.amountCollected)}
            image={c.Image}
            deadline={c.deadline}
          />
        ))}
         
      </div>
      
    </div>
    <div className="flex justify-center mt-5  ">
        <button className="bg-blue-500  text-white rounded px-2 py-2 " onClick={clearCampaign} >Clear all Campaigns</button>
      </div>
    </div>
  );
}

export default Home