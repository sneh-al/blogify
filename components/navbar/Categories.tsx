import { siteConfig } from "@/config/site";
import React from "react";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const Categories = () => {
  return (
    <ScrollArea className="whitespace-nowrap shadow shadow-accent  border-y   ">
      <div className="  p-5 flex gap-2 md:gap-5 ">
        {siteConfig.categories.map((category) => (
          <Button className=""  key={category.id}>
            {category.name}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default Categories;
