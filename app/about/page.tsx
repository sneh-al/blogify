import About from "@/components/about/About";
import Features from "@/components/about/Features";
import Hero from "@/components/about/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};
const page = () => {
  return (
    <main className=" ">
      <Hero />

      <About />
      <Features />
      
    </main>
  );
};

export default page;
