/* eslint-disable object-shorthand */
import { useDispatch, useSelector } from 'react-redux';
import getTrackDuration from '../../helpers';
import * as S from './Track.styled';
import { setCurrentTrack } from '../../store/audioplayer/actions';




export function GetTracks({ tracks, isLoading, getTracksError }) {



  const playingTrack = useSelector((store) => store.audioplayer.track)
  const isPlaying = useSelector((store) => store.audioplayer.playing)
  const dispatch = useDispatch()
 
  const trackList = tracks.map(track => 
        <S.PlaylistItem key={track.id}>
        <S.PlaylistTrack onClick={() => {dispatch(setCurrentTrack({ playlist: tracks, track: track }))}}>
          <S.TrackTitle>
          <div>
            {isLoading || getTracksError ? <S.TrackTitleImageLoading /> : 
            <S.TrackTitleImage>
              {playingTrack && playingTrack.id === track.id ? 
              <S.TrackTitleDotSvg $isPlaying={isPlaying} alt="music" />
              : <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"/>
            </S.TrackTitleSvg> }
           </S.TrackTitleImage>}
          </div>
          {isLoading || getTracksError ? <S.TrackTitleTextLoading /> : <S.TrackTitleText>
            <S.TrackTitleLink href="http://">
                {track.name} 
                <S.TrackTitleSpan>
                {track.version ? track.version : ''}
                </S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText> }
          </S.TrackTitle>
          {isLoading || getTracksError
          ? <S.TrackAuthorLoading /> 
          : <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">
            {track.author}
            </S.TrackAuthorLink>
          </S.TrackAuthor> }
          
          <S.TrackAlbum>
            {isLoading || getTracksError
            ? <S.TrackAlbumLinkLoading />
            : <S.TrackAlbumLink href="http://">
              {track.album}
              </S.TrackAlbumLink>}     
          </S.TrackAlbum>
          {isLoading || getTracksError ? '' : <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg>
            <S.TrackTimeText>{getTrackDuration(track.duration_in_seconds)}</S.TrackTimeText>
          </S.TrackTime> }         
        </S.PlaylistTrack>
      </S.PlaylistItem> 
        )
        return (
          trackList
        );
}