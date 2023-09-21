import { useEffect, useState } from "react";
import { StyledProgressInput } from "./ProgressBar.styled";


export default function ProgressBar({ currentTrack, audioRef }) {
    const [currentTime, setCurrentTime] = useState(0);
    const duration = currentTrack.duration_in_seconds;
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentTrack) {
                setCurrentTime(Math.floor(audioRef.current.currentTime));
                   
                }
        }, 1000);
        console.log(currentTime); 

        
        setTimeout(() => {
            clearInterval(interval)
        }, 5 * 1000)
        
    }, [currentTime]);

    
  
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