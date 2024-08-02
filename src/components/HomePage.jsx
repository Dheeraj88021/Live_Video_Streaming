import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [input, setInput] = useState("");
  const Navigate = useNavigate();

  const submit = () => {
    Navigate(`/room/${input}`);
  };

  return (
    <div className="conatiner">
      <h1>Welcome to Zoom Application</h1>
      <div className="wrapper">
        <img
          src="https://blog.tryshiftcdn.com/uploads/2020/05/zoom-tips-1.jpg"
          alt=""
        />
        <input
          required
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Join the Metting"
        />
        <button onClick={submit}>Join Metting</button>
      </div>
    </div>
  );
};

export default HomePage;
