"use client";

import { useState } from "react";
import MintSubdomain from "./_components/MintSubdomain/MintSubdomain";
import SubdomainInputForm from "./_components/SubdomainInputForm/SubdomainInputForm";
import type { NextPage } from "next";

const Mint: NextPage = () => {
  const [subdomainInputValue, setDomainInputValue] = useState("");
  const [privateKeyInputValue, setPrivateKeyInputValue] = useState("");
  const [mintButtonClicked, setMintButtonClicked] = useState(false);

  const handleSendValue = (value: string) => {
    setDomainInputValue(value);
    setMintButtonClicked(true);
    setPrivateKeyInputValue(value);
  };

  const toggleSharedState = (newValue: boolean) => {
    setMintButtonClicked(newValue);
  };

  return (
    <>
      <div className="text-center mt-8 p-10">
        <h1 className="text-4xl my-0">Mint ERC 1155 tickets</h1>
        <p className="text-neutral">Mint ERC 1155 tickets</p>
      </div>
      <SubdomainInputForm onSendValue={handleSendValue} />
      <br />
      {mintButtonClicked && (
        <MintSubdomain
          subdomainInputValue={subdomainInputValue}
          privateKeyInputValue={privateKeyInputValue}
          toggleSharedState={toggleSharedState}
        />
      )}
    </>
  );
};

export default Mint;
