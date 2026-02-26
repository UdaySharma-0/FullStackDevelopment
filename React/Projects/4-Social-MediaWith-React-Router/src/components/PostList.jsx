import React, { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";
import { RiH2 } from "react-icons/ri";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      <h1 className="text-center text-3xl md:relative md:mb-6 top-4 font-semibold">
        Posts
      </h1>
      {/* {fetching && <LoadingSpinner />} */}
      {postList.length !== 0 ? (
        <div className="flex md:mb-10 mb-4 md:mt-10 md:flex-row md:m-auto md:flex-wrap flex-col gap-2 justify-center items-center">
          { postList.map((element) => {
              return <Post key={element.id} post={element} />;
            })}
        </div>
      ) : (
        <WelcomeMsg />
      )}
    </>
  );
};

export const postLoader = () => {
  return (
    fetch('https://dummyjson.com/posts')
    .then((res) => res.json())
    .then((res) =>{
      return res.posts;
    })
  );
};

export default PostList;
