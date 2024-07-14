"use client";

import { useState } from "react";
import DisplaySubdomainList from "./_components/DisplaySubdomainList/DisplaySubdomainList";
import DomainInputBox from "./_components/DomainInputBox/DomainInputBox";
import type { NextPage } from "next";

const Buy: NextPage = () => {
  const [domainInputValue, setDomainInputValue] = useState("");
  const [subdomainButtonClicked, setSubdomainButtonClicked] = useState(false);

  const handleSendValue = (value: string) => {
    setDomainInputValue(value);
    setSubdomainButtonClicked(true);
  };

  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Buy Subdomain</h1>
        <p className="text-neutral">Buy a ticket as an ERC 1155 subdomain</p>
      </div>
      <DomainInputBox onSendValue={handleSendValue} />
      <br />
      {subdomainButtonClicked && <DisplaySubdomainList domainInputValue={domainInputValue} />}
    </>
  );
};

export default Buy;
