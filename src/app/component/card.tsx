import React, { useEffect } from 'react';
import Likedislikebtn from "../component/likedislikebtn";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../store/slices/postsSlice";
import { toggleLike, toggleUnlike } from "../store/slices/likeSlice";

interface CardProps {
  id: number;
  title: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ id, title, url }) => {
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addPost({ id, title, url }));
  };

  const handleUnsave = () => {
    dispatch(deletePost(id));
  };

  const handleLike = () => {
    dispatch(toggleLike(id));
  };

  const handleUnlike = () => {
    dispatch(toggleUnlike(id));
  };

  const posts = useSelector((state: any) => state.posts);
  const isPostSaved = posts.some((post: any) => post.id === id);
  const isPostLiked = useSelector((state: any) => state.likes.some((like: any) => like.postId === id && like.liked));

  useEffect(() => {
    console.log('Updated state:', posts);
  }, [posts]);

  return (
    <div className="h-full border-2 border-gray-800 border-opacity-60 rounded-lg overflow-hidden flex flex-col justify-between">
      <div>
        <img className="lg:h-52 md:h-36 w-full object-cover object-center" src={url} alt="blog" />
      </div>
      <div className=" ">
        <p className="leading-relaxed mb-3 text-black px-3 ">{title}.</p>
      </div>
      <div className="flex items-center justify-between flex-wrap px-3 py-2">
        {isPostSaved ? (
          <button onClick={handleUnsave} className="unsavebtn bg-zinc-700 text-white px-5 py-2 rounded-full transition-colors duration-300 hover:bg-sky-700 hover:text-white">Unsave</button>
        ) : (
          <button onClick={handleSave} className="savebtn bg-zinc-700 text-white px-5 py-2 rounded-full transition-colors duration-300 hover:bg-sky-700 hover:text-white">Save</button>
        )}
        <button onClick={isPostLiked ? handleUnlike : handleLike} className="likebtn bg-zinc-700 text-white px-5 py-2 rounded-full transition-colors duration-300 hover:bg-sky-700 hover:text-white">{isPostLiked ? 'Unlike' : 'Like'}</button>
        <span className="text-gray-400 inline-flex items-center leading-none text-4xl cursor-pointer">
          <Likedislikebtn />
        </span>
      </div>
    </div>
  );
};

export default Card;
