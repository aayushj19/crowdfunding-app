import React, { useState } from "react";
import { getEthereumContract } from "../utils";
import { ethers } from "ethers";


const CampaignCard = ({ title, description, target, collected, image, deadline, id }) => {
  const [amount, setAmount] = useState("");

 const donate = async () => {
  try {
    if (!window.ethereum) {
      alert("Please install MetaMask to donate.");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const contract = await getEthereumContract();

    const parsedAmount = ethers.parseEther(amount.toString());

    const tx = await contract.donateToCampaign(id, {
      value: parsedAmount,
    });

    await tx.wait();
    alert("Donation successful!");
    setAmount(""); 
  } catch (err) {
    console.error("Donation failed:", err);
    alert("Transaction failed. See console for details.");
  }

};


  return (
    <div className="bg-white  text-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 max-w-sm">
      <div className="overflow-hidden rounded-t-2xl">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </div>  
      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold text-white truncate">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

        <div className="flex justify-between text-sm text-gray-700 mt-2">
          <div>
            <span className="block text-xs text-gray-500">Target</span>
            <strong>{target} ETH</strong>
          </div>
          <div>
            <span className="block text-xs text-gray-500">Raised</span>
            <strong>{collected} ETH</strong>
          </div>
        </div>

        <p className="text-xs text-white pt-1">
          Deadline: {new Date(Number(deadline) * 1000).toLocaleDateString()}
        </p>

        <input
          type="number"
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mt-2 p-2 border rounded text-sm"
        />

        <button
          onClick={donate}
          disabled={!amount}
          className="w-full mt-3 bg-indigo-600 text-white text-sm py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Donate Here       
        </button>
      </div>
    </div>
  );
};

export default CampaignCard;
