"use client";

import React, { useState } from "react";

interface Props {
  onSendValue: (value: string) => void;
}

const DomainInputBox: React.FC<Props> = ({ onSendValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    onSendValue(inputValue);
  };

  return (
    <div className="text-center mt-8 p-10">
      <div className="text-4xl my-0">Enter domain that has subdomains to buy</div>
      <br />
      <div>
        <input
          type="text"
          className="input border border-primary"
          placeholder="domain name, e.g. hello.eth"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button onClick={handleButtonClick} className="btn btn-primary">
          {" "}
          Get subdomains
        </button>
      </div>
    </div>
  );
};

export default DomainInputBox;
