import React, { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";
import { RiH2 } from "react-icons/ri";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    
    fetch("https://dummyjson.com/post", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
        setFetching(false);
      });

      return ()=>{
        console.log("Cleaning up UseEffect");
        controller.abort();
      }
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl md:relative top-4 font-semibold">
        Posts
      </h1>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length !== 0 && (
        <div className="flex md:mb-10 mb-4 md:mt-10 md:flex-row md:m-auto md:flex-wrap flex-col gap-2 justify-center items-center">
          {!fetching &&
            postList.map((element) => {
              return <Post key={element.id} post={element} />;
            })}
        </div>
      )}
    </>
  );
};

export default PostList;
