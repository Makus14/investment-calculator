import React, { useState } from "react";

export default function Body() {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue === "") {
      setValue("");
      return;
    }

    const newValue = parseFloat(inputValue);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  const handleBlur = () => {
    if (value > 100) setValue(100);
    if (value < 0) setValue(0);
  };

  return (
    <div id="user-input">
      <div id="input-group ">
        <label id="label">INITIAL INVESTMENT</label>
        <input id="input"></input>
      </div>
      <div id="input-group ">
        <label id="label">ANNUAL INVESTMENT</label>
        <input id="input"></input>
      </div>
      <div id="input-group ">
        <label id="label">EXPECTED RETURN</label>
        <input
          id="expected-return-input"
          placeholder="0"
          type="number"
          step="0.1"
          value={value}
          min="0"
          max="100"
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            padding: "8px",
            fontSize: "16px",
            textAlign: "left",
          }}
        />
      </div>
      <div id="input-group">
        <label id="label">DURATION</label>
        <input id="input"></input>
      </div>
    </div>
  );
}
