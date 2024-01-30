import Journey from "~/app/_components/Journey";
import Navbar from "~/app/_components/Navbar";

export default async function Home({ params }: { params: { id: string } }) {
  return (
    <>
      <Navbar />
      <Journey params={{ id: params.id }} />
    </>
  );
}
