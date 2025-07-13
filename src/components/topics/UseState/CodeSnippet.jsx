import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeSnippet() {
  const code = `
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
`;

  return (
    <SyntaxHighlighter language="jsx" style={oneDark}>
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeSnippet;
