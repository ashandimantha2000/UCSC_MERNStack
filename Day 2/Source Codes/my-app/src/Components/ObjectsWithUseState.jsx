import React, { useState } from "react";

function ObjectsWithUseState() {
  //Initialize state
  const [user, setUser] = useState({ name: "Ashan", age: 23 });
  const [newName, setNewName] = useState("");

  //function to handle the name
  const changeName = () => {
    if (newName.trim() !== "") {
      setUser((prevUser) => ({ ...prevUser, name: newName }));
      setNewName("");
    }
  };

  //function to handle age increment
  const incrementAge = () => {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  };

  const decrementAge = () => {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age - 1 }));
  };

  return (
    <div>
      <h1>Objects With UseState Examples</h1>
      <p>
        {user.name} is {user.age} years old.
      </p>
      <input
        type="text"
        placeholder="Enter New Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={changeName}>Change Name</button>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={decrementAge}>Decrement Age</button>
    </div>
  );
}

export default ObjectsWithUseState;
