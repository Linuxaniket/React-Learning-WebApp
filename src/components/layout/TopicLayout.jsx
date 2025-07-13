import React from "react";

function TopicLayout({ title, theory, code, example }) {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📘 Theory</h2>
        <div className="bg-blue-50 p-4 rounded shadow">{theory}</div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💻 Code Snippet</h2>
        <div className="bg-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
          {code}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">🧪 Live Example</h2>
        <div className="bg-white p-4 border rounded shadow border-none">{example}</div>
      </section>
    </div>
  );
}

export default TopicLayout;
