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
    <div>
      <div>Enter domain that has subdomains to buy</div>
      <div>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={handleButtonClick}> Get subdomains</button>
      </div>
    </div>
  );
};

export default DomainInputBox;
