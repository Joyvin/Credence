import { getServerAuthSession } from "~/server/auth";
import Hero from "./_components/Hero";
import Subhero from "./_components/Subhero";
import Navbar from "./_components/Navbar";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
