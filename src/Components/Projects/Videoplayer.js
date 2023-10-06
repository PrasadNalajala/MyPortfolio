import React from 'react';
import YouTube from 'react-youtube';

function Videoplayer({ videoId }) {
  const opts = {
    height: '220px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
}

export default Videoplayer;
