import React, { useState } from "react";

function UserGreeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h2 className="text-green-600 font-semibold">Welcome back, Aniket!</h2>
      ) : (
        <h2 className="text-red-600 font-semibold">Please log in to continue.</h2>
      )}
    </div>
  );
}

function Example() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="space-y-4">
      <UserGreeting isLoggedIn={loggedIn} />
      <button
        onClick={() => setLoggedIn(!loggedIn)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {loggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
}

export default Example;
