import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="mb-2">You clicked <strong>{count}</strong> times</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </div>
  );
}

export default Example;
