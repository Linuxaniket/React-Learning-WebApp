import React from "react";

function Theory() {
  return (
    <div>
      <p>
        <strong>useState</strong> is a React Hook that lets you add state to functional components.
      </p>
      <ul className="list-disc ml-6">
        <li>It returns an array with two values: the state and a function to update it</li>
        <li>Updating the state re-renders the component</li>
      </ul>
    </div>
  );
}

export default Theory;
