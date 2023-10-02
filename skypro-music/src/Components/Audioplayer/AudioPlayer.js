import { useEffect, useRef, useState } from 'react';
import * as S from './AudioPlayer.styled'
import ProgressBar from './ProgressBar';


export default function AudioPlayer({ isLoading, currentTrack }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isLoop, setIsLoop] = useState(false);
    const [volume, setVolume] = useState(0.25);


    const handleStart = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handleStop = () => {
      audioRef.current.pause();
      setIsPlaying(false);
    };

    const togglePlay = isPlaying ? handleStop : handleStart;

    useEffect(() => {
      if (currentTrack) {
        audioRef.current.src = currentTrack.track_file;
        handleStart();
      }
    }, [currentTrack]);


    useEffect(() => {
      if (currentTrack) {
        audioRef.current.addEventListener('loadedmetadata', () => {
          setDuration(audioRef.current.duration);
            
          const interval = setInterval(() => {
            setCurrentTime(Math.floor(audioRef.current.currentTime));
            }, 1000);
    
            setTimeout(() => {
                clearInterval(interval)
            }, audioRef.current.duration * 1000);
            });
      }
    }, [currentTrack]);


    const toggleLoop = () => {
        setIsLoop(!isLoop);
    };

    const handleTimeChange = (e) => {
      setCurrentTime(e.target.value);
      audioRef.current.currentTime = e.target.value
    }

    const handleVolumeChange = (e) => {
      setVolume(e.target.value);
      audioRef.current.volume = e.target.value;
    }
    


    return (
    <div>
      {currentTrack ? (
        <div>
          <div /* eslint-disable-next-line jsx-a11y/media-has-caption */ />
            <audio controls ref={audioRef} loop={isLoop}>
                <source src={currentTrack.track_file} type="audio/mpeg" />
            </audio>
        </div>
      ) : null}

      {currentTrack ? (
      <S.Bar>
      <S.BarContent>
        <ProgressBar duration={duration} currentTime={currentTime} setCurrentTime={setCurrentTime} handleTimeChange={handleTimeChange} />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay onClick={togglePlay}>
                <S.PlayerBtnPlaySvg alt="play">
                  <use xlinkHref={isPlaying ? 'img/icon/sprite.svg#icon-pause' : 'img/icon/sprite.svg#icon-play'} />
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat onClick={toggleLoop}>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref={isLoop ? 'img/icon/sprite.svg#icon-repeatA' : 'img/icon/sprite.svg#icon-repeat'} />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>
            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  {isLoading
                  ? <S.PlayerAuthorLinkLoading />
                  : <S.TrackPlayAuthorLink href="http://">
                  {currentTrack.name}
                </S.TrackPlayAuthorLink>}
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  {isLoading
                  ? <S.PlayerAuthorLinkLoading />
                  : <S.TrackPlayAlbumLink href="http://">
                  {currentTrack.author}
                </S.TrackPlayAlbumLink>}
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>
              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon">
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike className="_btn-icon">
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine
                  type="range"
                  name="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>) : null}
    </div>
    );
}