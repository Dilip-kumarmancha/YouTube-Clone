import React, { Component } from "react";
import { Grid } from "@mui/material";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
function App() {
  const [state, setState] = useState({
    videos: [],
    selectedVideo: null,
  });
  const ComponentDidMount = () => {
    HandleSubmit("Krishna");
  };
  const onVideoSelect = (video) => {
    setState({
      ...state,
      selectedVideo: video,
    });
  };
  const HandleSubmit = async (SearchTerm) => {
    const respose = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyC2Cv9nNZiUuTIWK1mDp3CJbZ8gLD7bJPQ",
        q: SearchTerm,
      },
    });
    // console.log(respose.data.items[0]);
    setState({
      videos: respose.data.items,
      selectedVideo: respose.data.items[0],
    });
  };
  const { selectedVideo, videos } = state;

  return (
    <>
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={10}>
              <SearchBar onFormSubmit={HandleSubmit} />
            </Grid>
            <Grid item xs={7}>
              {/* this is for video details  */}
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={5}>
              {/* this is for video play lists */}
              <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default App;
