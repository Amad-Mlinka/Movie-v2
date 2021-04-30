import React, { useEffect } from "react";
import ReactPlayer from "react-player"

export const Trailer = (embedId: any) => {
    
        useEffect(() => {
            console.log(embedId);
        }, [])


        return (
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${embedId}`}
        />
    )
}

