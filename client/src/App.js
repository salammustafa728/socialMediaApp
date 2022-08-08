import React, { useEffect } from "react";
import { Container, Typography, AppBar, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./component/posts/Posts";
import Form from "./component/form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/post';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memorize
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memorize"
          height="60"
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
