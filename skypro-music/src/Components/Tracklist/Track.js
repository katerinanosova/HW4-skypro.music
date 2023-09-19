
import * as S from './Track.styled';

export function getTrackDuration(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

export function GetTracks({ isLoading, tracks, getTracksError, setCurrentTrack }) {
 
  const trackList = tracks.map(track => 
        <S.PlaylistItem key={track.id}>
        <S.PlaylistTrack onClick={() => {setCurrentTrack(track)}}>
          <S.TrackTitle>
          <div>
            {isLoading ? <S.TrackTitleImageLoading /> : <S.TrackTitleImage>
             <S.TrackTitleSvg alt="music">
               <use xlinkHref="img/icon/sprite.svg#icon-note"/>
             </S.TrackTitleSvg>
           </S.TrackTitleImage>}
          </div>
          {isLoading ? <S.TrackTitleTextLoading /> : <S.TrackTitleText>
            <S.TrackTitleLink href="http://">
                {track.name} 
                <S.TrackTitleSpan>
                {track.version ? track.version : ''}
                </S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText> }
          </S.TrackTitle>
          {isLoading 
          ? <S.TrackAuthorLoading /> 
          : <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
            {track.author}
            </S.TrackAuthorLink>
          </S.TrackAuthor> }
          
          <S.TrackAlbum>
            {isLoading
            ? <S.TrackAlbumLinkLoading />
            : <S.TrackAlbumLink href="http://">
              {track.album}
              </S.TrackAlbumLink>}     
          </S.TrackAlbum>
          {isLoading ? '' : <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg>
            <S.TrackTimeText>{getTrackDuration(track.duration_in_seconds)}</S.TrackTimeText>
          </S.TrackTime> }         
        </S.PlaylistTrack>
      </S.PlaylistItem> 
        )
        return (
          getTracksError || trackList
        );
}