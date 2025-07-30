import React, { useState, useRef, useEffect } from "react";
import { FaPaperclip, FaPaperPlane, FaBell } from "react-icons/fa";
import "./Messaging.css";

const tenants = ["Rohan", "Priya", "Rahul", "Sneha"];

const initialMessages = [
  { id: 1, sender: "Landlord", text: "Hello, your rent is due for July.", time: "10:00 AM" },
  { id: 2, sender: "Priya", text: "Thanks! I’ll pay it by tomorrow.", time: "10:02 AM" },
];

export default function Messaging() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMsg, setNewMsg] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [selectedTenant, setSelectedTenant] = useState(tenants[0]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (newMsg.trim() === "" && !attachment) return;

    const msg = {
      id: messages.length + 1,
      sender: "Landlord",
      text: newMsg || (attachment ? `📎 Attached: ${attachment.name}` : ""),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, msg]);
    setNewMsg("");
    setAttachment(null);
  };

  const sendReminder = () => {
    const reminder = {
      id: messages.length + 1,
      sender: "Landlord",
      text: `🔔 Reminder to ${selectedTenant}: Please pay your rent for this month.`,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, reminder]);
  };

  return (
    <div className="messaging-container">
      <div className="header">
        <h2>📨 Messaging Center</h2>
        <p>Seamless chat between Landlord & Tenants</p>
      </div>

      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-row ${msg.sender === "Landlord" ? "right" : "left"}`}>
            <div className={`message-bubble ${msg.sender === "Landlord" ? "landlord" : "tenant"}`}>
              <div>{msg.text}</div>
              <span className="time">{msg.time}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-section">
        <label htmlFor="attachment" title="Attach document" className="icon-btn">
          <FaPaperclip />
        </label>
        <input
          type="file"
          id="attachment"
          onChange={(e) => setAttachment(e.target.files[0])}
          style={{ display: "none" }}
        />

        <input
          type="text"
          placeholder="Type your message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
        />

        <button className="send-btn" onClick={sendMessage}>
          <FaPaperPlane /> Send
        </button>
      </div>

      <div className="reminder-section">
        <select value={selectedTenant} onChange={(e) => setSelectedTenant(e.target.value)}>
          {tenants.map((tenant) => (
            <option key={tenant} value={tenant}>
              {tenant}
            </option>
          ))}
        </select>
        <button className="reminder-btn" onClick={sendReminder}>
          <FaBell /> Remind {selectedTenant}
        </button>
      </div>
    </div>
  );
}
