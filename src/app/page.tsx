import Image from "next/image";
import AILoader from "./ui/aiload-animate";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
      {/* <h1 className="text-2xl items-center font-semibold mb-6">Analyzing Trends...</h1> */}
      <AILoader />
    </main>
  );
}
