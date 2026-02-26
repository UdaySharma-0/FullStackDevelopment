import {
  createContext,
  useCallback,
  useState,
  useEffect,
  useReducer,
} from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  // const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    console.log("Got the post :", post);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
      },
    });
  };

  // const addInitialPosts = (posts) => {
  //   dispatchPostList({
  //     type: "ADD_INITIAL_POSTS",
  //     payload: {
  //       posts,
  //     },
  //   });
  // };

  const deletePost = useCallback(
    (postid) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postid,
        },
      });
    },
    [dispatchPostList]
  );

  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
