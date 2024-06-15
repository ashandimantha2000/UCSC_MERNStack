import { useState } from "react";
import axios from "axios";

function MessageSender() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendToServer = () => {
    axios
      .post("http://localhost:3000/change-message", { message })
      .then((res) => setResponse(res.data.message))
      .catch(() => setResponse("Error sending to the server"));
  };
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendToServer}>Send</button>
      <div>{response}</div>
    </div>
  );
}
export default MessageSender;
