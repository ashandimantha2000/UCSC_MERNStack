import { useState } from "react";
import axios from "axios";

const MessageSender = () => {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);
  const [id, setId] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const sendToServer = () => {
    axios
      .post("http://localhost:3000/messages", { message })
      .then((res) => setResponses([...responses, res.data]))
      .catch(() =>
        setResponses([...responses, { message: "Error sending to the server" }])
      );
  };

  const getFromServer = () => {
    axios
      .get("http://localhost:3000/messages")
      .then((res) => setResponses(res.data))
      .catch(() =>
        setResponses([{ message: "Error getting from the server" }])
      );
  };

  const getFromServerById = () => {
    axios
      .get(`http://localhost:3000/messages/${id}`)
      .then((res) => setResponses([res.data]))
      .catch(() =>
        setResponses([{ message: "Error getting from the server" }])
      );
  };

  const updateMessage = () => {
    axios
      .put(`http://localhost:3000/messages/${id}`, { message: newMessage })
      .then((res) => setResponses([res.data]))
      .catch(() =>
        setResponses([{ message: "Error updating the message" }])
      );
  }

  const deleteMessage = ()=>{
    axios
      .delete(`http://localhost:3000/messages/${id}`)
      .then((res) => setResponses([res.data]))
      .catch(() =>
        setResponses([{ message: "Error deleting the message" }])
      );
  }
  return (
    <div>
      <div>
        {/* Send to Server */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={sendToServer}>Send</button>
      </div>
      <br />
      <div>
        {/* View By Id */}
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

        <button onClick={getFromServerById}>Find</button>
      </div>
      {/* Response Preview */}
      <div>
        {responses.map((resp, index) => (
          <div key={index}>{resp.message}</div>
        ))}
      </div>
      {/* View All */}
      <div>
        <button onClick={getFromServer}>View All</button>
      </div>

      <div>
        {/* Update Message */}
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={updateMessage}>Update</button>
      </div>
      <br />
      {/* Delete a message */}
      <div>

        <button onClick={deleteMessage}>Delete</button>
      </div>
    </div>
  );
};

export default MessageSender;
