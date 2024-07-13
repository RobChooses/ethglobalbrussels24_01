"use client";

import React, { useEffect, useState } from "react";
import { createEnsPublicClient } from "@ensdomains/ensjs";
import { getSubnames } from "@ensdomains/ensjs/subgraph";
// Import viem transport, viem chain, and ENSjs
import { http } from "viem";
import { sepolia } from "viem/chains";

interface Props {
  domainInputValue: string;
}

const DisplaySubdomainList: React.FC<Props> = ({ domainInputValue }) => {
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
    <div>
      Finding for {domainInputValue}
      <ul>
        {subDomainsList.map((subDomain, index) => (
          <li key={index}>{subDomain.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplaySubdomainList;
