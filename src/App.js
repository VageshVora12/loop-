
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import React,{useCallback,useEffect,useRef,useState} from 'react';
import VideoLooper from 'react-video-looper';
import sampleVideo from './vid.mp4';
function App() {
  const ref = useRef(null);

  const handle = useFullScreenHandle();
useEffect(() => {
  setTimeout(() => {
    ref.current.click();
  }, 5000); //miliseconds
}, []);
  return (
    <div>

      <FullScreen handle={handle}>
      <VideoLooper source={sampleVideo} start={0} end={57} style={{position:'absolute'}} />
      </FullScreen>
      <button ref={ref} onClick={handle.enter} style={{position:'absolute',opacity:'0.01',width:'100%',height:'100vh'}}>
        Enter fullscreen
      </button>
      

    </div>
  );
  
}






// const App = () => {
//   const ref = useRef(null);

//   const myfunc = () => {
//     console.log("I was activated 5 seconds later");
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       ref.current.click();
//     }, 5000); //miliseconds
//   }, []);

//   return (
//     <button ref={ref} onClick={myfunc}>
//       TEST
//     </button>
//   );
// };

export default App;
