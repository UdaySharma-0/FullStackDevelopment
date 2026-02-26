import { createContext, useCallback, useReducer } from "react";

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
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postDescription, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId,
        title: postTitle,
        body: postDescription,
        reactions: reaction,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback((postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  }, [dispatchPostList]);

  return (
    <PostListContext.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Hongkong",
    body: "I am enjoying in hongkong, especially in thailand this vacation is unforgetable for me",
    reactions: 2,
    userId: "user-12",
    tags: ["vacation", "mumbai", "enjoying"],
  },

  {
    id: 2,
    title: "Working in Google",
    body: "I am enjoying in Google, especially in sport room and google kitchen this internship is unforgetable for me",
    reactions: 20,
    userId: "user-15",
    tags: ["Google", "NewYork", "Internship"],
  },
];

export default PostListProvider;
