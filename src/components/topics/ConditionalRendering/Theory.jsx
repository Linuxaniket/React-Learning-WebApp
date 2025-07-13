import React from "react";

function Theory() {
  return (
    <div>
      <p>
        <strong>Conditional Rendering</strong> in React means rendering components or elements only when certain conditions are met.
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>Used to show or hide UI elements based on user state, props, or logic</li>
        <li>Helps create dynamic, responsive interfaces</li>
      </ul>
      <p className="mt-3 font-semibold">Common methods:</p>
      <ul className="list-disc ml-6">
        <li><code>if-else</code> statements</li>
        <li><code>ternary operator ( ? : )</code></li>
        <li><code>logical AND ( && )</code></li>
      </ul>
    </div>
  );
}

export default Theory;
