import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
function VideoItem({ video, onVideoSelect }) {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ alignItems: "center", display: "flex", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        ></img>
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}
export default VideoItem;
