export const CONTRACT_ADDRESS = "0x9E55a85f2F8cc986b1285dDDB189eDAd8DCb5D3C"


export const CONTRACT_ABI = [
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "campaigns",
    "outputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "string", "name": "title", "type": "string" },
      { "internalType": "string", "name": "description", "type": "string" },
      { "internalType": "uint256", "name": "target", "type": "uint256" },
      { "internalType": "uint256", "name": "deadline", "type": "uint256" },
      {
        "internalType": "uint256",
        "name": "amountCollected",
        "type": "uint256"
      },
      { "internalType": "string", "name": "Image", "type": "string" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" },
      { "internalType": "string", "name": "_title", "type": "string" },
      { "internalType": "string", "name": "_description", "type": "string" },
      { "internalType": "uint256", "name": "_target", "type": "uint256" },
      { "internalType": "uint256", "name": "_deadline", "type": "uint256" },
      { "internalType": "string", "name": "_image", "type": "string" }
    ],
    "name": "createCampaign",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
    "name": "donateToCampaign",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCampaigns",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "owner", "type": "address" },
          { "internalType": "string", "name": "title", "type": "string" },
          { "internalType": "string", "name": "description", "type": "string" },
          { "internalType": "uint256", "name": "target", "type": "uint256" },
          { "internalType": "uint256", "name": "deadline", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "amountCollected",
            "type": "uint256"
          },
          { "internalType": "string", "name": "Image", "type": "string" },
          {
            "internalType": "address[]",
            "name": "donators",
            "type": "address[]"
          },
          {
            "internalType": "uint256[]",
            "name": "donations",
            "type": "uint256[]"
          }
        ],
        "internalType": "struct CrowdFunding.Campaign[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
    "name": "getDonators",
    "outputs": [
      { "internalType": "address[]", "name": "", "type": "address[]" },
      { "internalType": "uint256[]", "name": "", "type": "uint256[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "numberOfCampaigns",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }
]