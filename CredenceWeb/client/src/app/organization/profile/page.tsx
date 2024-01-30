import Navbar from "../../_components/Navbar";
import Portfolio from "../../_components/Portfolio";
import GenerateQR from "../../_components/GenerateQR";
import { Providers } from "../../_components/providers";
import Wallet from "../../_components/wallet";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Wallet />
      <Portfolio />
      {/* <GenerateQR data={"hello"} /> */}
    </>
  );
}
