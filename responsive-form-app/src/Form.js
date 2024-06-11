import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  // State variables
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        handleErrorResponse(responseData,response);
        return;
      }

      setSuccessMessage("Form submitted successfully!");
      setEmail("");
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to connect to the server. Please check your network connection and try again.");
    }
  };

  // Handle response errors
  const handleErrorResponse = (data,response) => {
    console.log(data);
    if (data.detail) {
      if (data.detail[0].msg === "Field required") {
        setError("Email is required");
      } if (response.status === 422) {
        setError("Email address ending with @ez.works is not allowed");
      } else {
        setError(data.detail[0].msg);
      }
    } else {
      setError("Something went wrong");
    }
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when user starts typing
    setSuccessMessage("");
  };

  // Validate email format
  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className={error ? "input-error" : ""}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
      <button type="submit">Contact Me</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
};

export default Form;
