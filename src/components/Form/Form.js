import React, { useState } from "react";
import "./Form.css";
import { addUser } from "../../redux/userSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleClick = (e) => {
    e.preventDefault();

    addUser({
      name,
      email,
    });
  };

  return (
    <form onSubmit={handleClick}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input type="submit" placeholder="Add user" />
      </div>
    </form>
  );
};

export default Form;
