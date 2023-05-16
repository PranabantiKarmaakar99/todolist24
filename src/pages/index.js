
import react from "react";
import Header from "./components/header";
import Input from "./components/inputbox";
import Tabs from "./components/tab";
import Todolist from "./components/todolist";
import Searchbar from "./components/searchbar";


import Image from "next/image";



export default function Home() {
  return (
    <div className="
     bg-my_bg_image 
     lg:bg-my_bg_image_lg
     lg:w-full
     h-screen
     object-cover
     flex
     flex-col
     items-center
     
   
     ">
     
      <Searchbar  />
     {/* <Header /> */}
     <Input />
     <Tabs />
     <Todolist  />
      
   

    </div>
   
  )
}
