import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = {};

        if (name.trim() === "") {
            formErrors.name = "Name is required";
        }

        if (email.trim() === "") {
            formErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
            formErrors.email = "Please enter a valid email address";
        }

        if (message.trim() === "") {
            formErrors.message = "Message is required";
        }

        if (Object.keys(formErrors).length === 0) {
            // Submit the form
            console.log("Form submitted:", { name, email, message });
        } else {
            setErrors(formErrors);
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <>
            <Header />
            <Main />
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                            onBlur={() => {
                                if (name.trim() === "") {
                                    setErrors((prevState) => ({
                                        ...prevState,
                                        name: "Name is required",
                                    }));
                                } else {
                                    setErrors((prevState) => ({
                                        ...prevState,
                                        name: undefined,
                                    }));
                                }
                            }}
                        />
                        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {errors.email && <div>{errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleMessageChange}
                        />
                        {errors.message && <div>{errors.message}</div>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default ContactForm;
