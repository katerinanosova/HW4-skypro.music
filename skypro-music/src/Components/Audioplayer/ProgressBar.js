import { StyledProgressInput } from "./ProgressBar.styled";


export default function ProgressBar({ duration, currentTime, setCurrentTime }) {
    
  
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