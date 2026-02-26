import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postDescriptionElement = useRef();
  const tagsElement = useRef();
  const reactionElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postDescription = postDescriptionElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(/[\s+]/);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postDescriptionElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postDescription, reaction, tags);
  };
  return (
    <form action="" onSubmit={(event) => handleSubmit(event)}>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create Post now!</h1>
            <p className="py-6">
              A Social Media Platform Where the World connect together.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">User Id</label>
                <input
                  ref={userIdElement}
                  type="text"
                  className="input"
                  placeholder="Enter your User Id"
                  onChange={(e) =>
                    (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                  }
                />
                <label className="label">Post Title</label>
                <input
                  ref={postTitleElement}
                  type="text"
                  className="input"
                  placeholder="How are you feeling today.."
                />
                <label className="label">Post Description</label>
                <textarea
                  ref={postDescriptionElement}
                  type="text"
                  className="textarea"
                  placeholder="Tell more about post"
                />
                <label className="label">Enter your hashtags here</label>
                <input
                  ref={tagsElement}
                  type="text"
                  className="input"
                  placeholder="Please type tags using space"
                />
                <label className="label">Add Reactions</label>
                <input
                  ref={reactionElement}
                  type="number"
                  className="number text-center"
                  placeholder="Number of Reactions"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Post</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
