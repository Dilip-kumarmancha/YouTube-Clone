import React from "react";
import { Paper, Typography } from "@mui/material";

function VideoDetail({ video }) {
  // instead of videp we can pass props also but we need to  use props.video in entire content in that case
  if (!video) return <div>Loading......</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "20px" }}>
        <Typography variant="subtitle1">
          {video.snippet.title}-{video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle3">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
}
export default VideoDetail;
