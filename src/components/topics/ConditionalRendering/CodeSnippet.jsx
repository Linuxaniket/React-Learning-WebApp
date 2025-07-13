import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeSnippet() {
  const code = `
function UserGreeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back, Aniket!</h2>
      ) : (
        <h2>Please log in to continue.</h2>
      )}
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
