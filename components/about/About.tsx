import React from "react";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const About = () => {
  return (
    <section className=" text-balance bg-card  grid  p-5  min-h-screen overflow-hidden relative py-24 md:py-44">
         <div className=" absolute h-full  w-[50%] bg-background   left-0  top-0 rounded-r-3xl"/>
          <div className=" m:block absolute h-full w-[50%] right-0 top-0 bg-card  rounded-bl-3xl "/>

      <article className="z-10 max-w ">
        <header className="flex items-center gap-5">
      <h5 className="font-bold text-xl">About</h5><Separator className=" p-[2px]"/>

        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-24 place-content-center  ">
          <p className=" text-2xl md:text-3xl lg:text-5xl tracking-wide p-5  ">
            At Blogify, we&apos;re passionate about empowering individuals to
            share their stories and expertise with the world. Our mission is to
            provide a user-friendly platform that fosters creativity,
            connection, and collaboration. 
          </p>
          <div className="grid grid-cols-1  gap-5   md:px-5">
            {
              infos.map(info =><Card key={info.id} className=" ">
              <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                 {info.title}
               </CardTitle>
              </CardHeader>
              <CardContent>
 
               <p className="md:text-xl ">
                {info.info}
               </p>
              </CardContent>
              
             </Card>)
            }
            
          
          </div>
        </main>
      </article>
    </section>
  );
};

export default About;


const infos =[
  {
    id:1,
    title:"Craft Your Stories with Us",
    info:" Jump into a sea of creativity and express your thoughts vividly. Our blogging platform is designed for you to share your stories on the go."
  },
  {
    id:2,
    title:"Markdown Made Easy",
    info:"  No coding, no hassle! It’s super intuitive. You’ll be writing your first markdown blog in no time!"
  }
]