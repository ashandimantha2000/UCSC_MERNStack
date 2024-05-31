import React, { useRef } from "react";

function UncontrolledComponent() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleSubmit = (e) => {
    //Stop Refreshing
    e.preventDefault();
    
    const values = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    };
    console.log("Uncontrolled from submitted values", values);
  };
  return (
    <form onSubmit={handleSubmit}>
        <h1>Uncontrolled Components Example</h1>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        ref={firstNameRef}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        ref={lastNameRef}
      />
        <button type="submit" >Submit</button>
    </form>
  );
}

export default UncontrolledComponent;
