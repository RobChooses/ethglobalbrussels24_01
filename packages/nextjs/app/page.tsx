"use client";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { primaryWallet } = useDynamicContext();
  const connectedAddress = primaryWallet?.address;

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">ENS Limited</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <a target="_blank" href={`https://eth-sepolia.blockscout.com/address/${connectedAddress}`}>
              {connectedAddress}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
