import React, { useState } from "react";
import AddressInput from "./AddressInput";
import { checkEligibility, generateMerkleTree } from "../utils/merkleUtils";


const AirdropChecker = () => {
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
 

  const handleCheck = () => {
    if (!address) {
      setMessage("⚠️ Please enter a valid Ethereum address.");
      return;
    }

    const result = checkEligibility(address.trim());

    if (result.eligible) {
      setMessage(
        `✅ ${address} is eligible for the airdrop! You can claim ${result.amount} tokens.`
      );
    } else {
      setMessage(`❌ ${address} is not eligible for the airdrop.`);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Airdrop Eligibility Checker
      </h1>
      <p className="text-sm text-gray-500 break-all">
        <strong>Eligible address:</strong> {"0x7ad23834cf5c6d93b06917451301fa25708ef36c"}
      </p>

      <AddressInput
        address={address}
        setAddress={setAddress}
        handleCheck={handleCheck}
      />

      {message && (
        <div
          className={`mt-4 rounded-xl border shadow-sm text-center ${
            message.includes("✅")
              ? "border-green-200 bg-green-50"
              : message.includes("⚠️")
              ? "border-yellow-200 bg-yellow-50"
              : "border-red-200 bg-red-50"
          }`}
        >
          <div className="p-6">
            <h2
              className={`text-1xl md:text-2xl font-extrabold tracking-tight ${
                message.includes("✅")
                  ? "text-green-700"
                  : message.includes("⚠️")
                  ? "text-yellow-700"
                  : "text-red-700"
              }`}
            >
              {message.includes("✅") && "You are Eligible"}
              {message.includes("⚠️") && "Check input"}
              {message.includes("❌") && "You are Not eligible"}
            </h2>
            <p
              className={`mt-3 text-sm md:text-base leading-6 ${
                message.includes("✅")
                  ? "text-green-800"
                  : message.includes("⚠️")
                  ? "text-yellow-800"
                  : "text-red-800"
              }`}
            >
              {message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirdropChecker;
