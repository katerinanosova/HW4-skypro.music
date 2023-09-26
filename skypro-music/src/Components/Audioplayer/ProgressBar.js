import getTrackDuration from "../../helpers";
import { StyledProgressInput, StyledTimeProgress } from "./ProgressBar.styled";



export default function ProgressBar({ duration, currentTime, handleTimeChange }) {
    
    
  
  
    return (
      <div>
        <StyledTimeProgress>
          {getTrackDuration(currentTime)} / {getTrackDuration(duration)}
        </StyledTimeProgress>
      <StyledProgressInput
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={handleTimeChange}
        $color="#ff0000"
      />
      </div>
    );
  } 