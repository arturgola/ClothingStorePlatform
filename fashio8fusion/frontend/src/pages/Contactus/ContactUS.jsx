import React, { useState } from "react";
import styles from "./ContactUS.module.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your code here to handle form submission
    // Typically, you would send this data to a server or perform some action
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles["contactus-page"]}>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Reach out to us!</p>

      <form className={styles["form"]} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className={styles["form-input"]}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className={styles["form-input"]}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className={styles["form-button"]} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
