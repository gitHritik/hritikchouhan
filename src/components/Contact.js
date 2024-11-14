import React, { useRef, useState } from "react";
import "./Contact.css";
// import { useState } from "react";
// import { db } from "../firebase";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   db.collection("contacts")
  //     .add({
  //       name: name,
  //       email: email,
  //       message: message,
  //     })
  //     .then(() => {
  //       alert("Message has been send successfylly");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ukvz3cp",
        "template_4p26cx6",
        form.current,
        "PpSWTzHXoVA4G9OSo"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent Succefully", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Sorry Some error occurrred", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="contact__complete" id="contact">
        <div className="contact">
          <h1>Contact</h1>
          <div className="contact__container">
            <div className="contact__info">
              <h2>If Not Now, When? Let’s Work Together!</h2>
              <p>
                If you want to get in touch then contact me or just go through
                in last and check my email and if you wanna email me so you can
                do it too...
              </p>
              <p className="contact__signature">Hritik Chouhan</p>
              <p>Gmail Down below 👇</p>
            </div>
            <div className="contact__form">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  minLength={5}
                  required
                />
                <input
                  type="email"
                  name="email"
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
                  name="message"
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
    </>
  );
}

export default Contact;
