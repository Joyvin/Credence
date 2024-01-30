import Journey from "~/app/_components/Journey";
import Navbar from "~/app/_components/Navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Journey
        params={{
          id: "",
        }}
      />
    </>
  );
}
