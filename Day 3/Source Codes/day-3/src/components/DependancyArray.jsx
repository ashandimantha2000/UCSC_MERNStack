import React, { useState, useEffect } from "react";

function DependancyArray() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log("Error:", error));
  }, [userId]);

  return (
    <div>
      <h1>User Data:</h1>
      <button onClick={() => setUserId(userId + 1)}>Load Next User</button>
      <br />
      <br />
      <h2>{userData?.name}</h2>
      <p>{userData?.email}</p>
      <p>{userData?.phone}</p>
    </div>
  );
}

export default DependancyArray;
