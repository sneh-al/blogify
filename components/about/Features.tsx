import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const Features = () => {
  return (
    <section className="bg-card py-24 md:py-44 overflow-hidden rounded-b-3xl border-b">
          <article className="z-10 max-w">
        <header className="flex items-center gap-5 p-5 ">
      <h5 className="font-bold text-xl">Features</h5><Separator className=" p-[2px]"/>

        </header>
        <main className="grid place-content-center p-5  ">
        
          <div className="  py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {features.map((feature, index) => (
          <Card key={index} className="text-balance max-w-md">

            <CardHeader className="flex flex-row items-center justify-between ">
            <CardDescription className=" font-thin" >
                {feature.id}
              </CardDescription>
              <CardDescription className="font-thin ">
                {feature.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className=" gap-3 justify-center flex flex-col">
            <div className={cn(feature.color, "group   aspect-square items-center flex rounded-full w-full p-5 ")} >
                <figure className="group-hover:scale-110 transition-all duration-500 ease-out m-auto    text-9xl ">
                {feature.icon}
                </figure>
              </div>

              <CardTitle className=" text-xl md:text-2xl lg:text-3xl font-semibold">
                {feature.title}
              </CardTitle>
            
              <p>{feature.description}</p>
            </CardContent>
            

          </Card>
        ))}
            
          
          </div>
        </main>
      </article>
  
    </section>
  );
};

export default Features;

const features = [
  {
    id:1,
    subtitle: "Connect",
    title: "Connect with Like-Minded Individuals",
    description:
      "Connect with like-minded individuals who share your interests and perspectives.",
    icon: "👥",
    color: "bg-red-500",
  },
  {
    id:2,
    subtitle: "Discover",
    title: "Discover New Voices",
    description:
      " Discover new voices, perspectives, and ideas that challenge and inspire you to expand your horizons.",
    icon: "🌎",
    color: "bg-rose-500",
  },
  {
    id:3,
    subtitle: "Engage",
    title: "Engage and Interact",
    description:
      "Engage with fellow bloggers through comments, likes, and shares. ",
    icon: "💬",
    color: "bg-orange-500",
  },

  {
    id:4,
    subtitle: "Support",
    title: "Support and Encouragement",
    description:
      "Receive support, encouragement, and constructive feedback from fellow bloggers.",
    icon: "🙌",
    color: "bg-purple-500",
  },
  {
    id: 5,
    subtitle: "Inspire",
    title: "Inspire Creativity",
    description:
      "Ignite your creativity and spark new ideas by immersing yourself in a community of passionate bloggers. ",
    icon: "🎨",
    color: "bg-blue-500",
  },
  {
    id: 6,
    subtitle: "Learn",
    title: "Continuous Learning",
    description:
      "Embrace a culture of continuous learning as you engage with a wealth of diverse content. ",
    icon: "📚",
    color: "bg-teal-500",
  },
];
