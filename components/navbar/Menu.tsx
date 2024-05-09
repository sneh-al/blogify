"use client"


import React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from '../ui/button'
import Footer from '../footer'
import Categories from './Categories'


const Menu = () => {
  return (
    <Drawer >
  <DrawerTrigger asChild>
    <Button className='' >Menu</Button>
  </DrawerTrigger>


  <DrawerContent className=''>


    <Categories/>
    <DrawerHeader className="grid grid-cols-2  max-w border-b w-full items-center justify-between">
    <Button className='w-full ' variant="primary" >Signin with Google</Button>
    <Button >Signup</Button>
   

    </DrawerHeader>
    <DrawerFooter>
      
      <Footer/>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  )
}

export default Menu