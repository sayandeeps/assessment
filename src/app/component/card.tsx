import React from 'react'
import Likedislikebtn from "../component/likedislikebtn";

interface PhotoItem {
    // albumId:number;
    // id: number;
    title: string;
    url: string;
    // thumbnailUrl:string;
  }
  

const card: React.FC<PhotoItem> = ({  title,url }) => {
  return (
    <>

<div  className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden flex flex-col justify-between" >
          <div><img  className="lg:h-52 md:h-36 w-full object-cover object-center" src={url} alt="blog" /></div>
          <div  className=" ">
            
           <p  className="leading-relaxed mb-3 text-black px-3 ">{title}.</p>           
          </div>
          <div  className="flex items-center justify-between flex-wrap px-3 py-2 ">
          <button className="savebtn bg-zinc-700 text-white px-5 py-2 rounded-full transition-colors duration-300 hover:bg-sky-700 hover:text-white">Save</button>

              
              <span  className="text-gray-400 inline-flex items-center leading-none text-4xl cursor-pointer">
                <Likedislikebtn />
              </span>
            </div>
        </div>

    </>
  )
}

export default card