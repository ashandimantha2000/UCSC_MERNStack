import React, { useState } from "react";

function FormValidations() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatching, setIsMatching] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsMatching(e.target.value === password);
  };
  return (
    <div>
      <h1>Form Validations</h1>
      <label htmlFor="">Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <label htmlFor="">Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <br />
      {!isMatching && (
        <span style={{ color: "red" }}>Passwords do not match</span>
      )}
    </div>
  );
}

export default FormValidations;
