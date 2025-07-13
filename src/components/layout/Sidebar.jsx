import React from "react";

function Sidebar({ setTopic, currentTopic }) {
  const topics = [
    { key: "conditional", label: "🔀 Conditional Rendering" },
    { key: "usestate", label: "📦 useState Hook" },
    // Add more topics here
  ];

  return (
    <aside className="w-64 bg-white shadow-lg p-4 rounded h-fit sticky top-6">
      <h2 className="text-xl font-bold mb-4">📚 Topics</h2>
      <ul className="space-y-2">
        {topics.map((topic) => (
          <li key={topic.key}>
            <button
              onClick={() => setTopic(topic.key)}
              className={`w-full text-left px-4 py-2 rounded ${
                currentTopic === topic.key
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {topic.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
