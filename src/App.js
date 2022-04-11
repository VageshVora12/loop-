
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import React,{useCallback,useEffect,useState} from 'react';
import VideoLooper from 'react-video-looper';
import sampleVideo from './vid.mp4';
function App() {
  const handle = useFullScreenHandle();
  
  // useEffect(() => {
  //   handle.enter();
  // });

  return (
    <div>

      <FullScreen handle={handle}>
      <VideoLooper source={sampleVideo} start={0} end={57} style={{position:'absolute'}}/>
      </FullScreen>
      <button onClick={handle.enter} style={{position:'absolute'}}>
        Enter fullscreen
      </button>

    </div>
  );
}

export default App;





