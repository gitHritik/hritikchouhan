import React from "react";
import "./Contact.css";
import { useState } from "react";
import { db } from "../firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been send successfylly");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact__complete" id="contact">
      <div className="contact">
        <h1>Contact</h1>
        <div className="contact__container">
          <div className="contact__info">
            <h2>If Not Now, When? Let’s Work Together!</h2>
            <p>
              If you want to get in touch then contact me or just go through in
              last and check my email and if you wanna email me so you can do it
              too...
            </p>
            <p className="contact__signature">Hritik Chouhan</p>
            <p>Gmail Down below 👇</p>
          </div>
          <div className="contact__form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength={5}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                minLength={5}
                required
              />
              <textarea
                type="text"
                cols="30"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                minLength={10}
                required
                rows="10"
              ></textarea>
              <button type="submit" className="contact__button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
