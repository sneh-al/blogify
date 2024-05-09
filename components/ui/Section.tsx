import React, { ReactNode } from "react";
import { Separator } from "./separator";
import Link from "next/link";
import { Button } from "./button";

const Section = ({
  children,
  title,
  href,
}: {
  children: ReactNode;
  title: string;
  href?: string;
}) => {
  return (
    <section className=" pt-24">
      <article className=" max-w ">
        <header className="flex items-center justify-between gap-5 p-5 overflow-hidden">
          <h5 className="font-bold text-xl text-nowrap">{title}</h5>

        <Separator/>

        </header>
        <main className="grid place-content-center p-5 py-24 ">{children}</main>
      </article>
    </section>
  );
};

export default Section;
