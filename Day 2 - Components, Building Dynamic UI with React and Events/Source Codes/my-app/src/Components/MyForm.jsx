import { useState } from "react";

export default function MyForm() {
  const [inputText, setInputText] = useState("");
  const [transformedText, setTransformedText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p>{transformedText}</p>
      <button onClick={() => setTransformedText(inputText.toUpperCase())}>
        Uppercase
      </button>
      <button onClick={() => setTransformedText(inputText.toLowerCase())}>
        Lowercase
      </button>
      <button
        onClick={() =>
          setTransformedText(inputText.split("").reverse().join(""))
        }
      >
        Reverse Text
      </button>
    </div>
  );
}
