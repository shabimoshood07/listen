import React from "react";
import ReactPlayer from "react-player";
import { url } from "./data";

function Video() {
  return (
    <div className="contain">
      {url.map((link) => {
        const { id, url, name } = link;
        return (
          <>
            <div className="container" key={id}>
              <div className="title-container">
                <h4 className="video-title">{name}</h4>
              </div>
              <div className="video-container">
                <ReactPlayer
                  url={url}
                  className="player"
                  width="100%"
                  height="100%"
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                  }}
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Video;
