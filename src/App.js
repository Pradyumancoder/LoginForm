import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the data in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);

    // Reset the form
    setName("");
    setEmail("");
    setMobile("");
  };

  const handleReset = () => {
    // Clear the form
    setName("");
    setEmail("");
    setMobile("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <h2>Login</h2>
          <div className="divform">
            <h3>Name </h3>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            <h3>Email-Id </h3>
            <input
              type="email"
              placeholder="Email-Id"
              value={email}
              onChange={handleEmailChange}
            />
            <h3>Mobile NO.</h3>
            <input
              type="tel"
              placeholder="Mobile NO."
              value={mobile}
              onChange={handleMobileChange}
            />

            <div className="buttondiv">
              <button type="button" onClick={handleReset}>
                Reset
              </button>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
