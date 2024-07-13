import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Mint tickets",
  description: "Mint tickets as ERC 1155",
});

const Mint: NextPage = () => {
  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Mint ERC 1155 tickets</h1>
        <p className="text-neutral">Mint ERC 1155 tickets</p>
      </div>
    </>
  );
};

export default Mint;
