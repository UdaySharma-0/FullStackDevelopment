import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <>
      <div className="card w-96 h-[260px] bg-base-100 card-md shadow-sm ">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p className="max-h-[100px] overflow-clip">{post.body}</p>
          <span
            className="absolute right-0 top-0 rounded-full bg-red-600 text-white font-semibold p-1.5"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin6Line />
          </span>
          <div className="card-actions">
            {post.tags.map((tag) => (
              <button
                key={tag}
                className="bg-blue-500 text-white rounded-2xl px-1"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="bg-green-200 text-green-800">
            This post has been reacted by {post.reactions.likes} peoples
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
