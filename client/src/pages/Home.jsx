import React, { useEffect, useState } from "react";
import { getEthereumContract } from "../utils";
import CampaignCard from "../components/CampaignCard"; // Make sure the path is correct
import { ethers } from "ethers";

function Home() {
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    const contract = await getEthereumContract();
    const allCampaigns = await contract.getCampaigns();
    setCampaigns(allCampaigns);
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Campaigns</h1>
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
  );
}

export default Home;
