import React, { useState } from "react";
import { getEthereumContract } from "../utils";
import { useNavigate } from "react-router-dom";

const navigator = useNavigate;

function CreateCampaign() {
  const [form, setForm] =    useState({
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const contract = await getEthereumContract();

    const deadlineInUnix = Math.floor(new Date(form.deadline).getTime() / 1000);

    const tx = await contract.createCampaign(
      window.ethereum.selectedAddress,
      form.title,
      form.description,
      (form.target),   
      deadlineInUnix,
      form.image
    );

    await tx.wait(); 

    alert("Campaign Created");
    navigator("/Home");
  } catch (error) {
    console.error(" Error creating campaign:", error);
  }
};


  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      {["title", "description", "target", "deadline", "image"].map((f) => (
        <input
          key={f}
          name={f}
          type={f === "deadline" ? "date" : "text"}
          placeholder={f[0].toUpperCase() + f.slice(1)}
          value={form[f]}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Create Campaign
      </button>
    </form>
  );
}

export default CreateCampaign;
