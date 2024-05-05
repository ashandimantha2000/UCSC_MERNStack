import React, { useState } from "react";

function ControlledComponent() {
  // separate state for each input field
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username", userName);
    console.log("Email", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Controlled Component</h1>
      <div>
        <label>User Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUsername(e.target.value);
            console.log("Username changed", e.target.value);
          }}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log("Email changed", e.target.value);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledComponent;
