import React from "react";

const DescriptionInput = ({ value, onChange }) => {
  return (
    <div className="input-wrapper">
      <textarea
        id="description"
        name="description"
        value={value}
        onChange={onChange}
        className="text-area brand-dropdown w-select "
        placeholder="Enter a description..."
        rows="2" // You can set the number of rows to define the initial height
        style={{
          padding: "15px",
          border: "1px solid white",
          borderRadius: "10px",
          fontFamily: "Thicccboi",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default DescriptionInput;
