import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@mui/material";
function VideoList({ videos, onVideoSelect }) {
  if (!videos || !Array.isArray(videos)) {
    console.log("Videos are not available");
    return null; // or display a loading indicator or an appropriate message
  }
  const Allvideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));

  return (
    <Grid container spacing={10}>
      {Allvideos}
    </Grid>
  );
}
export default VideoList;
