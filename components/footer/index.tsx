import React from 'react'
import { Github } from 'lucide-react';
import ThemeToggler from '../navbar/ThemeToggler';

const Footer = () => {
  return (
    <footer className='  flex flex-col items-center text-center gap-5 p-5   '>
      
        <article className='w-full  flex flex-col gap-5 items-center justify-center '>
        <div className='max-w-md  md:text-xl '>
           <p className='pt-5'>Crafted with 💖 by Snehal, this website, powered by Next.js, MongoDB with Prisma, and authenticated by NextAuth.js, shines bright on Netlify, boasting the sleek interface of Shadcn/UI
           </p>
        </div>
        <div className='flex items-center gap-5 '>
                <a href="/about" target="_blank" className='underline hover:text-primary' rel="noopener noreferrer">About us</a>
                <a href="/legal" target="_blank" className='underline hover:text-primary' rel="noopener noreferrer">Privacy policy</a>
        </div>
        </article>
        <article className="border-t pt-5 max-w  m-auto w-full flex items-center justify-between  gap-5">
      <h1 className="  text-3xl bg-gradient text-transparent bg-clip-text  font-bold ">
          Blogify
        </h1>
          <div className=" ml-auto flex items-center">
    <ThemeToggler/>
    <a >
            <Github />
          </a>
          </div>
     
         
      </article>

    </footer>
  )
}

export default Footer