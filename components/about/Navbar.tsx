import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className=" top-0 w-full p-5 z-50 bg-card backdrop-blur-3xl border-b">
      <nav className="flex justify-between max-w">
        <a href="/" className="text-3xl bg-gradient text-transparent bg-clip-text  font-bold">
          Blogify
        </a>
        <Button asChild>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Go to App
          </a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
