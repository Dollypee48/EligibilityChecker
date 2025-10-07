import React from "react";
import AirdropChecker from "./components/AirdropChecker";
import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <AirdropChecker />
    </div>
  );
};

export default App;
