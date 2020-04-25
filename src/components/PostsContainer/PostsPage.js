//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import { counter } from "@fortawesome/fontawesome-svg-core";
// import data 
import Dummy from "../../dummy-data"
const PostsPage = () => {
  // set up state for your data
 const [state, setState] = useState(Dummy)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {state.map(item=>{
        return <Post post={item}/>
      })}
    </div>
  );
};

export default PostsPage;
