import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Create event and tickets",
  description: "Create event and tickets as subdomain ENS",
});

const Buy: NextPage = () => {
  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Buy ticket</h1>
        <p className="text-neutral">Buy a ticket</p>
      </div>
    </>
  );
};

export default Buy;
