import { siteConfig } from "@/config/site";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" relative bg-card ">
        <div className=" absolute h-full   w-[50%] -z-0 bg-background left-0 top-0"/>
      <article className="flex justify-center flex-col md:flex-row  overflow-hidden  md:min-h-screen max-w      z-10">
        <header className="   flex  w-full   relative  p-10">
          <div className=" absolute h-full w-[50%] right-0 top-0 bg-card z-0 rounded-bl-3xl "/>
          <div className="rounded-full p-5 w-fit m-auto flex-1 z-10    border-4 border-r-transparent border-card ">
            <div className="overflow-hidden rounded-[50%] ">

        <Image src="/hero.jpeg" className="hover:scale-105 animate-in   transition-all duration-500 ease-out  w-full  " alt="BLogify" width={512} height={512} />
            </div>
          </div>
        </header>
        <main className="p-5 bg-card w-full  grid place-content-center gap-5 z-10 rounded-l-3xl md:rounded-none text-balance py-24 ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl tracking-wide  w-full p-5  ">
            Unleash Your Creativity <br/> with{" "}
            <span className=" font-semibold bg-gradient text-transparent bg-clip-text">Blogify</span>
          </h1>
          <p className="md:text-xl p-5">{siteConfig.discription}</p>
        </main>
      </article>
    </section>
  );
};

export default Hero;
