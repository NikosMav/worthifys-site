import React, { useState } from "react";

const PostalCodeField = ({ onChange }) => {
  const [zipCode, setPostalCode] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setPostalCode(value);

    // Basic validation for a five-digit number
    if (value.match(/^\d{5}$/) || value === "") {
      setError("");
      onChange(value);
    } else {
      setError("Please enter a valid postal code.");
    }
  };

  return (
    <div>
      <input
        type="text"
        id="postalcode"
        name="postalcode"
        value={zipCode}
        placeholder="Enter Postal Code"
        onChange={handleChange}
        className="brand-dropdown w-select"
        style={{
          height: "61px",
          border: error ? "1px solid red" : "1px solid white",
          padding: "15px",
          borderRadius: "10px",
          fontFamily: "Thicccboi",
        }}
        required
      />
      {error && <span style={{ color: "red", fontSize: "16px" }}>{error}</span>}
    </div>
  );
};

export default PostalCodeField;
