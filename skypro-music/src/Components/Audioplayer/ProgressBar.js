import { useEffect, useState } from "react";
import { StyledProgressInput } from "./ProgressBar.styled";


export default function ProgressBar({ currentTrack, audioRef }) {
    const [currentTime, setCurrentTime] = useState(0);
    // const duration = currentTrack.duration_in_seconds;
    const [duration, setDuration] = useState(0);
    
    // useEffect(() => {
    //   if (currentTrack) {
    //     audioRef.current.addEventListener('loadedmetadata', () => {
    //       setDuration(audioRef.current.duration);
    //       console.log(duration);
    //     });
    //   }
    // }, [currentTrack]);
       
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (currentTrack) {
    //             setCurrentTime(Math.floor(audioRef.current.currentTime));
                   
    //             }
    //     }, 1000);
    //     console.log(currentTime); 

        
    //     setTimeout(() => {
    //         clearInterval(interval)
    //     }, duration * 1000);
        
    // }, [currentTime]);

    useEffect(() => {
      if (currentTrack) {
        audioRef.current.addEventListener('loadedmetadata', () => {
          
          console.log(audioRef.current.duration); // выводится 136.620425
          setDuration(audioRef.current.duration); // вроде должно установиться значение в duration          
          console.log(duration); // выводит 0

          const interval = setInterval(() => {
            setCurrentTime(Math.floor(audioRef.current.currentTime));
          }, 1000);

          setTimeout(() => {
            clearInterval(interval)
        }, duration * 1000);
        });
      }
    }, [currentTrack])

    // if (currentTrack) {
    //   audioRef.current.addEventListener('loadedmetadata', () => {
    //     useEffect(() => {
    //         const interval = setInterval(() => {
    //           setCurrentTime(Math.floor(audioRef.current.currentTime));
    //         }, 1000);
    //         setDuration(audioRef.current.duration);
    //         console.log(audioRef.current.duration);
    //         console.log(duration);
    //         setTimeout(() => {
    //           clearInterval(interval)
    //       }, duration * 1000);       
    //     }, [currentTrack]);
    //   })
    // }


 



    

  
    return (
      <StyledProgressInput
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => setCurrentTime(event.target.value)}
        $color="#ff0000"
      />
    );
  } 