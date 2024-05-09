import React from "react";
import { SquarePen } from "lucide-react";
import Search from "./Search";
import { Button } from "../ui/button";
import Link from "next/link";
import Menu from "./Menu";


const Index = () => {
  return (
    <header className=" fixed   border-b  top-0 w-full bg-background/50 backdrop-blur-3xl  z-50   ">
      <nav className=" flex justify-between    w-full max-w    ">
          <a href="/" className="text-3xl bg-gradient text-transparent bg-clip-text  font-bold  p-5 pr-0 md:pr-5  "> Blogify</a>
        
          <div className="gap-2 md:gap-5 items-center flex   p-5 ">
         
       
           <Button asChild >
                <Link href="/">
                <SquarePen/>
                
                </Link>
           </Button>
            
            <div className="">
            <Search />
            
          </div>
            
          <Menu/>
        
          </div>
      </nav>

    </header>
  );
};

export default Index;
