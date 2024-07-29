import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onClickSend = (e) => {
    e.preventDefault();
    if (!name || !email || !message || isLoading) return;
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        {
          from_name: name,
          to_name: "Avinash Gupta",
          from_email: email,
          to_email: "guptaavinash92@gmail.com",
          message: message,
        },
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          resetForm();
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex pb-16 flex-col px-16 xl:ml-44 lg:flex-row gap-24">
      <div>
        <h2 className="text-white text-2xl">Let's Talk</h2>
        <h1
          className="w-fit text-4xl sm:text-6xl text-white font-bold md:max-w-lg w-full mt-2 "
          style={{
            background: "-webkit-linear-gradient(#9f55ff,#7000ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Me
        </h1>
        <form
          className="flex flex-col sm:w-[30rem] md:w-[35rem] mt-16"
          onSubmit={onClickSend}
        >
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="rounded-2xl text-white border-2 border-indigo-500/75 w-full h-12 sm:h-14 px-4 text-xl sm:text-xl bg-transparent"
          />
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="rounded-2xl text-white border-2 border-indigo-500/75 w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl bg-transparent mt-8"
          />
          <textarea
            rows={7}
            placeholder="A message for me...."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="rounded-2xl border-2 border-indigo-500/75 bg-transparent text-xl sm:text-2xl p-3 text-white mt-8"
          />
          <button
            className="mt-6 text-white font-extrabold text-lg rounded-2xl border-2 border-indigo-500/75 w-32 h-10"
            type="submit"
          >
            {isLoading ? (
              <i
                className="fa-solid fa-spinner fa-spin"
                style={{ color: "#ffffff" }}
              ></i>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
      <div className="flex lg:items-center lg:justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40248.56534065286!2d-1.4416922098526013!3d50.91381345101263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48738957be152909%3A0xa78c5a6a4cda71f0!2sSouthampton!5e0!3m2!1sen!2suk!4v1722019041895!5m2!1sen!2suk"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMe;
