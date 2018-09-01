import React from "react";

const Video = ({ url }) => (
  <video playsInline muted loop autoPlay="true" preload="metadata">
    <source src={url} type="video/mp4" />
    Your browser does not support video. See video at <a href={url}>{url}</a>
  </video>
);

export default Video;
