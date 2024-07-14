"use client";

import React, { useState } from "react";

interface Props {
  onSendValue: (value: string) => void;
}

const SubdomainInputForm: React.FC<Props> = ({ onSendValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    onSendValue(inputValue);
  };

  return (
    <div className="text-center mt-8 bg-secondary p-10">
      <div className="text-4xl my-0">Enter info on the subdomains to mint</div>
      <div>
        <label></label>
        <input
          type="text"
          placeholder="subdomain name, e.g. sub.hello.eth"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleButtonClick}>Mint subdomains</button>
      </div>
    </div>
  );
};

export default SubdomainInputForm;
