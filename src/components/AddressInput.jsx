import React from "react";

const AddressInput = ({ address, setAddress, handleCheck }) => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Enter your Ethereum address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={handleCheck}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-all duration-200"
      >
        Check Eligibility
      </button>
    </div>
  );
};

export default AddressInput;
