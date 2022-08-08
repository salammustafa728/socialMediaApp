import React from "react";
import Post from "./post/Post";
import { useSelector } from "react-redux";
// import useStyles from './Styles'
const Posts = () =>{
  const post = useSelector((state)=>state.post)
    // const classes = useStyles();

    console.log(post);
    return(
        <>
          <h1>Posts</h1>
          <Post/>
          <Post/>
        </>
      
    )
}


export default Posts;