import { useEffect, useState } from "react";
import { StyledProgressInput } from "./ProgressBar.styled";


export default function ProgressBar({ currentTrack, audioRef }) {
    const [currentTime, setCurrentTime] = useState(0);
    // const duration = currentTrack.duration_in_seconds;
    const [duration, setDuration] = useState(0);
    

       
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentTrack) {
                setCurrentTime(Math.floor(audioRef.current.currentTime));
                   
                }
        }, 1000);
        console.log(currentTime); 

        
        setTimeout(() => {
            clearInterval(interval)
        }, duration * 1000)
        
    }, [currentTime]);


    // тут я совсем не помнимаю логики: после обновления страницы и выбора трека выдаёт audioRef.current is null, а если трек уже выбран и потом добавить эту строку в код - выдаёт нормальное значение
    // if (currentTrack) {
    //   console.log(audioRef.current.duration);
    // }


    // Uncaught TypeError: audioRef.addEventListener is not a function
    if (currentTrack) {
      audioRef.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
      });
    }
    console.log(duration);

    

  
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