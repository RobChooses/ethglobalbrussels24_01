"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createEnsPublicClient } from "@ensdomains/ensjs";
import { getSubnames } from "@ensdomains/ensjs/subgraph";
// Import viem transport, viem chain, and ENSjs
import { http } from "viem";
import { sepolia } from "viem/chains";

interface Props {
  domainInputValue: string;
}

const DisplaySubdomainList: React.FC<Props> = ({ domainInputValue }) => {
  // TODO: Get network from Dynamic

  const client = createEnsPublicClient({
    chain: sepolia,
    transport: http(),
  });

  async function getSubDomains() {
    if (domainInputValue !== undefined) {
      const result = await getSubnames(client, { name: domainInputValue });
      return result;
    }
  }

  const [subDomainsList, setSubDomainsList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSubDomains();
      setSubDomainsList(result);
    };

    fetchData();
  }, [getSubDomains]);

  return (
    <div className="text-center mt-8 p-10">
      <p className="text-4xl my-0">Finding subdomains for {domainInputValue}</p>
      <br />
      <ul>
        {subDomainsList.map((subDomain, index) => (
          <li key={index}>
            <div className="text-4xl my-0">
              <Link href={`https://eth-sepolia.blockscout.com/name-domains/${subDomain.name}`}>{subDomain.name}</Link>
              <button className="btn btn-primary ml-5 mb-5 "> Get this!</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplaySubdomainList;
