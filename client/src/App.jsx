import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateCampaign from "./pages/CreateCampgains";
import useWallet from "./hooks/Wallet";

function App() {
  const { walletAddress, connectWallet, disconnectWallet } = useWallet();
  return (
    <Router>
      <nav className="p-4  flex justify-between items-center">
        <div className="flex  bg-white text-white gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/create" className="hover:underline">Create Campaign</Link>
        </div>
        <div>
          {walletAddress ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-300">
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </span>
              <button
                onClick={disconnectWallet}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCampaign />} />
      </Routes>
    </Router>

  );
}

export default App;
