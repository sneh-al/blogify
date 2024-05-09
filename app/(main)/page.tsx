import Fetured from "@/components/Fetured";
import Popular from "@/components/Popular";
import Recent from "@/components/Recent";




export default function Home() {
  return (
    <main className="min-h-screen pt-24">
      <Fetured/>
      <Popular/>
      <Recent/>
    </main>
  );
}


