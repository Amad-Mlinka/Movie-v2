import React from "react";
import ReactPlayer from "react-player"

export const Trailer = (embedId: any) => {

        return (
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${embedId.embedId}`}
        />
    )
}

