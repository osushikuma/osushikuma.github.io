import React from "react";
import { Button } from "../components/Button";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1>Want to get in touch?</h1>
        <h1>I'd love to hear from you.</h1>
        <form>
          <input
            className="footer-input"
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </form>
      </div>
      <Footer />
    </>
  );
}
