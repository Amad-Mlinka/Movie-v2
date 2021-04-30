import React from "react";
import ReactPlayer from "react-player"

export const Trailer = ( embedId:any ) => (
    <ReactPlayer
    url={`https://www.youtube.com/watch?v=${embedId}`}
  />
);

