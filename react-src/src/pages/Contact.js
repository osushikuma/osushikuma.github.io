import React, { useState } from "react";
import { Button } from "../components/Button";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);
  const sendEmail = () => {
    if (name && email && message) {
      window.open(
        "mailto:yumitakuma@outlook.com?" +
          "subject=" +
          name +
          "%20" +
          email +
          "&body=" +
          message
      );
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <div className="container">
        <h2>CONTACT</h2>
        <form>
          <div>
            <label>Name</label>
            <input name="name" type="name" onChange={handleName} />
          </div>
          <div>
            <label>Email</label>
            <input name="email" type="email" onChange={handleEmail} />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" onChange={handleMessage} />
          </div>
          <Button onClick={sendEmail}>Submit</Button>
        </form>
      </div>
      <Footer />
    </>
  );
}
