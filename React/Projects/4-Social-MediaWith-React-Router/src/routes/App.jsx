import React, { useState } from "react";
import Navbar from "../components/Navbar";
import GuruFooter from "../components/GuruFooter";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

const App = () => {
  let [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider
      value={{
        postList: [],
        addPost: () => {},
        deletePost: () => {},
      }}
    >
      <div>
        <Navbar setSelectedTab={setSelectedTab} />
        <Outlet/>
        {/* {selectedTab === "Home" ? <PostList /> : <CreatePost />} */}
        <GuruFooter />       
      </div>
    </PostListProvider>
  );
};

export default App;
