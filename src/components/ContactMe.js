import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import contact from "../images/contactme.svg";


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
        <div className="pb-16 px-16 xl:ml-44">
            <h2 className="text-white text-2xl">Let's Talk</h2>
            <h1 className="w-fit text-4xl sm:text-6xl text-white font-bold md:max-w-lg w-full mt-2 "
                style={{
                    background: "-webkit-linear-gradient(#9f55ff,#7000ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>Contact Me</h1>
            <form className="flex flex-col sm:w-[30rem] md:w-[35rem] mt-16" onSubmit={onClickSend}>
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
                    className="rounded-2xl border-2 border-indigo-500/75 bg-transparent p-3 text-white mt-8"
                />
                <button className="mt-6 text-white font-extrabold text-lg rounded-2xl border-2 border-indigo-500/75 w-32 h-10" type="submit">
                    {isLoading ? <i className="fa-solid fa-spinner fa-spin" style={{color: "#ffffff"}}></i> : "Send"}
                </button>
            </form>
        </div>
    );
}

export default ContactMe;