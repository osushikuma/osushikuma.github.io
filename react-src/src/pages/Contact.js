import React from "react";
import { Button } from "../components/Button";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="container">
        <h2>CONTACT</h2>
        <form>
          <input
            className="footer-input"
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <Button>Subscribe</Button>
        </form>
      </div>
      <Footer />
    </>
  );
}
