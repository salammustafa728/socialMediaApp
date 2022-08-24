import React from "react";
import Post from "./post/Post";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import useStyles from './Styles'
const Posts = ({setCurrentId}) =>{
  const post = useSelector((state)=>state.post)
    const classes = useStyles();

    console.log(post);
    return(
       !post.length ? <CircularProgress/> : (
       <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
          {
            post.map((post)=>(
              <Grid key={post._id} item xs={12} sm={6}>
                  <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))
          }
       </Grid>
       )
    )
}

// xs for mobile and small devices / 12 mean all the space/ sm for small and larger
export default Posts;