import { Form, redirect } from "react-router-dom";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  
  return (
    <Form method="post">
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
                  type="text"
                  name="userId"
                  className="input"
                  placeholder="Enter your User Id"
                />
                <label className="label">Post Title</label>
                <input
                  type="text"
                  name="title"
                  className="input"
                  placeholder="How are you feeling today.."
                  required
                />
                <label className="label">Post Description</label>
                <textarea
                  type="text"
                  name="description"
                  className="textarea"
                  placeholder="Tell more about post"
                />
                <label className="label">Enter your hashtags here</label>
                <input
                  type="text"
                  name="tags"
                  className="input"
                  placeholder="Please type tags using space"
                />
                <label className="label">Add Reactions</label>
                <input
                  type="number"
                  name="reactions"
                  className="number text-center"
                  placeholder="Number of Reactions"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4" type="submit">
                  Post
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export async function createPostAction(data) {
  const { addPost } = useContext(PostListContext);

  const formData = await data.request.formData(); //It is an async function that is used to get data from form
  const postData = Object.fromEntries(formData);
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
      addPost(post);
    });

  return redirect("/");
}
export default CreatePost;
