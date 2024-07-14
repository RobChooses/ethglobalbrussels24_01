"use client";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
// Import viem transport, viem chain, and ENSjs
import { createWalletClientFromWallet } from "@dynamic-labs/viem-utils";
import { createSubname } from "@ensdomains/ensjs/wallet";
import { WalletClient } from "viem";

type Props = {
  subdomainInputValue: string;
  toggleSharedState: (newValue: boolean) => void;
};

const Mintsubdomain: React.FC<Props> = ({ subdomainInputValue, toggleSharedState }) => {
  toggleSharedState(false);
  const { primaryWallet } = useDynamicContext();

  const createSubdomain = async () => {
    if (!primaryWallet) {
      return;
    }

    const walletClient = (await createWalletClientFromWallet(primaryWallet)) as WalletClient;

    if (!walletClient || !primaryWallet?.address) return <div>Unable to mint.</div>;

    // Now you can use the wallet client to write data to the blockchain
    const hash = await createSubname(walletClient, {
      name: subdomainInputValue,
      owner: `0x${primaryWallet?.address}`,
      contract: "nameWrapper",
    });
    console.log(hash);
    return hash;
  };

  createSubdomain();

  return <div>Minting subdomain {subdomainInputValue} ...</div>;
};

export default Mintsubdomain;
