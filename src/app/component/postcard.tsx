import React from "react";
import Likedislikebtn from "../component/likedislikebtn";

interface PostsItem {
  title: string;
  body: string;
}

const Postcard: React.FC<PostsItem> = ({ title, body }) => {
  return (
    <>
      <div className="h-full bg-slate-400 border border-gray-900  rounded-lg overflow-hidden flex flex-col justify-between ">
        <div className="p-4 ">
          <h1 className="leading-relaxed mb-2 font-bold">{title}</h1>

          <p className="leading-relaxed mb-3">{body}</p>
        </div>
        <div className="flex items-center justify-between flex-wrap px-3 pb-2">
          <button className="savebtn bg-zinc-700 text-white px-5 py-2 rounded-full transition-colors duration-300 hover:bg-sky-700 hover:text-white">
            Save
          </button>
          <span className="text-gray-400 inline-flex items-center leading-none text-4xl cursor-pointer">
            <Likedislikebtn />
          </span>
        </div>
      </div>
    </>
  );
};

export default Postcard;
