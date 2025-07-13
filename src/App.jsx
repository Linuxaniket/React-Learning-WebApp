import React, { useState } from "react";
import ConditionalRenderingPage from "./pages/ConditionalRenderingPage";
import UseStatePage from "./pages/UseStatePage";
import Sidebar from "./components/layout/Sidebar";

function App() {
  const [topic, setTopic] = useState("conditional");

  const renderTopic = () => {
    switch (topic) {
      case "conditional":
        return <ConditionalRenderingPage />;
      case "usestate":
        return <UseStatePage />;
      default:
        return <p>Select a topic to learn </p>; 
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 p-2 text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto flex gap-6">
        <Sidebar setTopic={setTopic} currentTopic={topic} />
        <div className="flex-1">
          {renderTopic()}
        </div>
      </div>
    </div>
  );
}

export default App;
