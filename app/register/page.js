// components/ContactForm.js
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); //
    setSuccess(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        setSuccess(false);
        setError(true);
        throw new Error("Failed to submit the data. Please try again.");
      }

      const result = await response.json();
      if (result.status(200)) {
        setSuccess(true);
        setError(false);
        console.log(result);

        // redircet
        result.redirect(307, ``);
      }

      // Reset form after submission
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSuccess(false);
      setError(error.message);
      console.error("Error:", error);
    }
  };

  return (
    <main>
      {error && <div style={{ color: "red" }}>Form submitted Failed.</div>}
      {success && (
        <div style={{ color: "green" }}>Form submitted successfully.</div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
